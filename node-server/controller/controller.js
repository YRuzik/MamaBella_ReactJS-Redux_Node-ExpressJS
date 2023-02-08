const knex = require('../DB/db.js');
let express = require('express');
let router = express.Router();

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
    const pizzaList = await knex.withSchema("public")
        .select('*')
        .from('salads')
    res.send(pizzaList)
});

router.get("/salads/:saladsTitle", async (req, res) => {
    let myTitle = req.params.saladsTitle;
    const productList = await knex
        .select('*')
        .from('salads')
        .where('title', myTitle)
    res.send(productList)
});

/*router.get("/:userId", (req, res) => {
    id = req.params.userId;
    if (id > users.length - 1) {
        res.status("404")
        res.send({ message: "User not found" })
    }
    res.send(users[req.params.userId]);
})

router.post("", (req, res) => {
    temp = new User(req.body)
    users.push(temp)

    res.send("User was added!")
})

router.put("/:userId", (req, res) => {
    id = req.params.userId;
    updUser = new User(req.body);
    users[id] = updUser;
    if (id > users.length - 1) {
        res.status("404")
        res.send({ message: "User not found" })
    }
    res.send("User was been changed!")
})

router.delete("/:userId", (req, res) => {
    id = req.params.userId;
    users.splice(id, 1);
    if (id > users.length) {
        res.status("404")
        res.send({ message: "User not found" })
    }
    res.send("User was been deleted!")
})*/

module.exports = router;
