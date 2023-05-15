const knex = require('../DB/db.js');
let express = require('express');
let router = express.Router();
const vk = require('../vk-auth/index')

const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('../service/mail-service')
const tokenService = require('../service/token-service')

const userDTO = require('../dtos/user-dto')

const ApiError = require('../exeptions/api-error')

const {body, validationResult} = require('express-validator')

const authMiddleware = require('../middlewares/auth-middleware')
const passport = require("passport");
const VKontakteStrategy = require("passport-vkontakte").Strategy;

//all-user-routes

router.get("/products", async (req, res, next) => {
    try {
        const products = await knex.withSchema("public")
            .select('*')
            .from('products')
            .leftJoin('categories', 'products.category', 'categories.id')
            .leftJoin('prices', 'products.id', 'prices.product_id')


        res.send(products)
    } catch (e) {
        next(e)
    }
});

router.get("/products/:id", async (req, res, next) => {
    try {
        const productID = req.params.id
        const product = await knex.withSchema("public")
            .select('*')
            .from('products')
            .leftJoin('categories', 'products.category', 'categories.id')
            .leftJoin('prices', 'products.id', 'prices.product_id')
            .where('product_id', productID)
        console.log(product)

        res.send(product)
    } catch (e) {
        next(e)
    }
});

//authorization-routes

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),

    async (req, res, next) => {

        const users = await knex
            .select('email', 'username')
            .from('users')

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            const hasDuplicates = await users.some(function (currentObject) {
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

            const allUsers = await knex.select('*').from('users');
            await knex('user_analytics').insert(
                {
                    length: allUsers.length
                }
            )

        } catch (e) {
            next(e)
        }
    })

router.post('/verify-email', async (req, res, next) => {
    try {
        const user = await knex
            .select('*')
            .from('users')
            .where('email', req.body.email)

        await mailService.sendChangePasswordMail(req.body.email, `${process.env.API_URL}/api/change-password/${user[0].activation_link}`)

        res.send('Ура')
    } catch (e) {
        next(e)
    }
})

router.post('/change-role/:id', async (req, res, next) => {
    try {
        const userID = req.params.id
        await knex('users').update('admin', req.body.value).where('id', userID)

        res.send('Ура')
    } catch (e) {
        next(e)
    }
})

router.get('/change-password/:link', async (req, res, next) => {
    try {
        const user = await knex
            .select('*')
            .from('users')
            .where('activation_link', req.params.link)

        console.log(user)

        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }

        res.redirect(`http://localhost:3000/change-password/${user[0].id}`)
    } catch (e) {
        next(e)
    }
})

router.post('/set-password/:id', async (req, res, next) => {
    try {
        const userID = req.params.id
        const hashPassword = await bcrypt.hash(req.body.password, 3)
        await knex('users').update('password', hashPassword).where('id', userID)

        res.send('Ура')
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

router.get('/users/:id', authMiddleware, async (req, res, next) => {
    try {
        const userID = req.params.id;
        const user = await knex
            .select('*')
            .from('users')
            .where('id', userID)

        res.send(user)
    } catch (e) {
        next(e)
    }
})

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

router.get('/analytics', authMiddleware, async (req, res, next) => {
    try {
        const usersAnalytics = await knex
            .select('*')
            .from('user_analytics');

        res.send(usersAnalytics)
    } catch (e) {
        next(e)
    }

})

router.get('/news', async (req, res, next) => {
    try {
        const news = await knex
            .select('*')
            .from('news');

        res.send(news)
    } catch (e) {
        next(e)
    }

})

router.get('/news/:id', async (req, res, next) => {
    try {
        const news = await knex
            .select('*')
            .from('news')
            .where('id', req.params.id);

        res.send(news)
    } catch (e) {
        next(e)
    }

})

router.get('/addresses/:id', authMiddleware, async (req, res, next) => {
    try {
        const userID = req.params.id;
        const userAddresses = await knex
            .select('*')
            .from('addresses')
            .where('user_id', userID)

        res.send(userAddresses)
    } catch (e) {
        next(e)
    }

})

router.post('/addresses', authMiddleware, async (req, res, next) => {
    try {
        await knex('addresses')
            .insert({
                address: req.body.address,
                user_id: req.body.user_id
            })

        res.send('Адрес успешно добавлен')
    } catch (e) {
        next(e)
    }

})

router.post('/create-order', authMiddleware, async (req, res, next) => {
    try {
        const id = uuid.v4()
        await knex('orders')
            .insert({
                id: id,
                user_id: req.body.user_id,
                address: req.body.address,
                status_id: 1,
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                products: req.body.products,
                full_price: req.body.full_price,
                date: new Date(Date.now() + (3*60*60*1000)).toISOString().replace('T',' ').replace('Z','')
            })

        setTimeout(async () => {
            await knex('orders').update('status_id', 2).where('id', id)
        }, 15000)
        setTimeout(async () => {
            await knex('orders').update('status_id', 2).where('id', id)
        }, 30000)

        res.send('Заказ создан')
    } catch (e) {
        next(e)
    }

})

router.get('/orders/:id', authMiddleware, async (req, res, next) => {
    try {
        const userID = req.params.id;
        const orders = await knex
            .select('*')
            .from('orders')
            .leftJoin('statuses', 'orders.status_id', 'statuses.id')
            .where('user_id', userID)

        res.send(orders)
    } catch (e) {
        next(e)
    }

})

router.delete('/addresses/:id', authMiddleware, async (req, res, next) => {
    try {
        const ID = req.params.id;

        await knex('addresses')
            .where('id', ID)
            .delete()

        res.send('Адрес удален')
    } catch (e) {
        next(e)
    }
})

router.post('/delete/user/:id', authMiddleware, async (req, res, next) => {
    try {
        const userID = req.params.id;

        await knex('user_tokens')
            .where('user_id', userID)
            .delete()

        await knex('users')
            .where('id', userID)
            .delete()

        res.send('Пользователь удален')
    } catch (e) {
        next(e)
    }

    const allUsers = await knex.select('*').from('users');
    await knex('user_analytics').insert(
        {
            length: allUsers.length
        }
    )
})

router.post('/products_change/:id', authMiddleware, async (req, res, next) => {
    try {
        const productID = req.params.id;
        await knex('products').update(
            {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
            }
        ).where('id', productID)

        await knex('prices').update(
            {
                price: req.body.price,
                weight: req.body.weight,
                size: req.body.size,
            }
        ).where('product_id', productID)

        res.send('Товар изменен')
    } catch (e) {
        next(e)
    }

})

    passport.use(
        new VKontakteStrategy(
            {
                clientID: process.env.VK_CLIENT_ID,
                clientSecret: process.env.VK_SECRET_KEY,
                callbackURL: "http://localhost:8083/api/auth/vkontakte/callback", //где найти url на случаи успеха и неудачи
                scope: ["email"],
                profileFields: ['email'],
            },
            async function (accessToken, refreshToken, params, profile, done) {
                try {
                    const user = await knex('users').select('*').where('id', profile.id)

                    if (!user[0]) {

                        const hashPassword = await bcrypt.hash('gagagag', 3)
                        const activationLink = uuid.v4();

                        await knex('users').insert(
                            {
                                id: profile.id,
                                username: profile.username,
                                first_name: profile.name.givenName,
                                last_name: profile.name.familyName,
                                email: profile.emails[0].value,
                                password: hashPassword,
                                activation_link: activationLink
                            }
                        )

                        const currentUser = await knex
                            .select('email', 'id', 'activated')
                            .from('users')
                            .where('id', profile.id)

                        const userdto = new userDTO(currentUser[0])
                        const tokens = tokenService.generateTokens({...userdto})
                        await tokenService.saveToken(userdto.id, tokens.refreshToken)

                        const allUsers = await knex.select('*').from('users');
                        await knex('user_analytics').insert(
                            {
                                length: allUsers.length
                            }
                        )
                    }

                    return done(null, profile);
                }
                catch (err) {
                    console.log(err);
                    return done(err)
                }
            }
        )
    );

passport.serializeUser(function (user, done) {
    console.log("SERIALIZE", user);
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function (data, done) {
    console.log("DESERIALIZE", data);
    done(null, JSON.parse(data));
});

router.get(
    "/auth/vkontakte/callback",
    passport.authenticate("vkontakte", {
        successRedirect: "/api/vkuser", //направить после успеха
        failureRedirect: "http://localhost:3000", //направить после неудачи
    })
);

router.get("/auth/vkontakte", passport.authenticate("vkontakte"));

router.get("/vkuser", async function (req, res) { //инфа о пользователе
    try {

        res.redirect(`http://localhost:3000/vk-login/${req.user.id}`)
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }

});

router.get("/vk-login-ura/:id", async (req, res) => {
    try {
        const user = await knex('users').select('*').where('id', req.params.id)

        if (!user[0]) {
            throw new Error()
        }

        const userdto = new userDTO(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.id, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
