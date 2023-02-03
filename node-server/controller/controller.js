let express = require('express');
let router = express.Router();


/*router.get("", (req, res) => {
    id = req.params.userId;
    if (users.length == 0) {
        res.status("404")
        res.send({ message: "Users not found" })
    }
    res.send(users);
})

router.get("/:userId", (req, res) => {
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
