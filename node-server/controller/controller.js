const knex = require('../DB/db.js');
let express = require('express');
let router = express.Router();

const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('../service/mail-service')
const tokenService = require('../service/token-service')

const userDTO = require('../dtos/user-dto')

const ApiError = require('../exeptions/api-error')

const {body, validationResult} = require('express-validator')

const authMiddleware = require('../middlewares/auth-middleware')

//all-user-routes

router.get("/pizza", async (req, res) => {
    const pizzaList = await knex.withSchema("public")
        .select('*')
        .from('pizza')
        .joinRaw("left join price_pizza as price ON price.pizza_id = pizza.id", [])
    res.send(pizzaList)
});

router.get("/pizza/:pizzaTitle", async (req, res) => {
    let myTitle = req.params.pizzaTitle;
    const productList = await knex
        .select('*')
        .from('pizza')
        .joinRaw("inner join price_pizza as price on price.pizza_id = pizza.id inner join dimensions as dimen on dimen.id = price.dimension_id")
        .where('title', myTitle)
    res.send(productList)
});

router.get("/salads", async (req, res) => {
    const saladsList = await knex.withSchema("public")
        .select('*')
        .from('salads')
    res.send(saladsList)
});

router.get("/salads/:saladsTitle", async (req, res) => {
    let myTitle = req.params.saladsTitle;
    const productList = await knex
        .select('*')
        .from('salads')
        .where('title', myTitle)
    res.send(productList)
});

router.get("/snacks", async (req, res) => {
    const snacksList = await knex.withSchema("public")
        .select('*')
        .from('snacks')
    res.send(snacksList)
});

router.get("/snacks/:snacksTitle", async (req, res) => {
    let myTitle = req.params.snacksTitle;
    const productList = await knex
        .select('*')
        .from('snacks')
        .where('title', myTitle)
    res.send(productList)
});

router.get("/drinks", async (req, res) => {
    const drinksList = await knex.withSchema("public")
        .select('*')
        .from('drinks')
        .joinRaw("left join price_drinks as price ON price.drinks_id = drinks.id", [])
    res.send(drinksList)
});

router.get("/drinks/:drinksTitle", async (req, res) => {
    let myTitle = req.params.drinksTitle;
    const productList = await knex
        .select('*')
        .from('drinks')
        .joinRaw("left join price_drinks as price ON price.drinks_id = drinks.id inner join weight on weight.id = price.weight_id")
        .where('title', myTitle)
    res.send(productList)
});

router.get("/souses", async (req, res) => {
    const sousesList = await knex.withSchema("public")
        .select('*')
        .from('souses')
    res.send(sousesList)
});

router.get("/souses/:sousesTitle", async (req, res) => {
    let myTitle = req.params.sousesTitle;
    const productList = await knex
        .select('*')
        .from('souses')
        .where('title', myTitle)
    res.send(productList)
});

//authorization-routes

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max:32}),

    async (req, res, next) => {

        const users = await knex
        .select('email', 'username')
        .from('users')

    try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            const hasDuplicates = await users.some(function(currentObject) {
                const email = currentObject.email.toLowerCase() === req.body.email;
                const username = currentObject.username.toLowerCase() === req.body.username;
                return email || username;

            });

            if (hasDuplicates) {
                throw ApiError.BadRequest(`Пользователь уже зарегестрирован`)
            }

            const hashPassword = await bcrypt.hash(req.body.password, 3)
            const activationLink = uuid.v4();

            await knex('users').insert(
                {
                    username: req.body.username,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hashPassword,
                    address: req.body.address,
                    activation_link: activationLink
                }
            )

            await mailService.sendActivationMail(req.body.email, `${process.env.API_URL}/api/activate/${activationLink}`)

            const currentUser = await knex
                .select('email', 'id', 'activated')
                .from('users')
                .where('username', req.body.username)

            const userdto = new userDTO(currentUser[0])
            const tokens = tokenService.generateTokens({...userdto})
            await tokenService.saveToken(userdto.id, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})
router.post('/login', async (req, res, next) => {
    try {
        const user = await knex
            .select('*')
            .from('users')
            .where('email', req.body.email)

        if (!user[0]) {
            throw ApiError.BadRequest('Пользователь с такой эл. почтой не найден')
        }

        const isPassEquals = await bcrypt.compare(req.body.password, user[0].password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        const userdto = new userDTO(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.id, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})
router.post('/logout', async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        await tokenService.removeToken(refreshToken)
        res.clearCookie('refreshToken');
        return res.send('Логаут успешен')
    } catch (e) {
        next(e)
    }
})
router.get('/activate/:link', async (req, res, next) => {
    try {
        const user = await knex
            .select('activation_link')
            .from('users')
            .where('activation_link', req.params.link)

        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }

        await knex
            .select('activated')
            .from('users')
            .where('activation_link', req.params.link)
            .update('activated', true)

        return res.redirect(process.env.CLIENT_URL)
    } catch (e) {
        next(e)
    }
})
router.get('/refresh', async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;

        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

        const user = await knex
            .select('*')
            .from('users')
            .where('id', userData.id)

        const userdto = new userDTO(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.id, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})

//test-endpoints

router.get('/users', authMiddleware, async (req, res, next) => {
    try {
        const users = await knex
            .select('*')
            .from('users')

        res.send(users)
    } catch (e) {
        next(e)
    }

})

module.exports = router;
