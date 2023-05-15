require('dotenv').config()

const PORT = process.env.PORT || 8083

const express = require('express'), http = require('http');
const controller = require("../controller/controller");
const app = express();
const server = http.createServer(app);
const errorMiddleware = require('../middlewares/error-middleware')
const passport = require("passport");

const cors = require('cors');

const cookieParser = require('cookie-parser')
const vk = require("../vk-auth");

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: ['http://localhost:3000']}))
app.use(
    require("express-session")({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", controller);
app.use(errorMiddleware)


const start = async () => {
    try {
        server.listen(PORT, () => console.log('Server listening on port: ', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()

