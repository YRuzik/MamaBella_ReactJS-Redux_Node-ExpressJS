const express = require('express'), http = require('http');
const controller = require("../controller/controller");
const app = express();
const server = http.createServer(app);
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use("/api", controller);
app.use("", (req, res) => {
    res.send("Works!")
})

const port = 8083

server.listen(port, () => {
    console.log('Server listening on port: ', port);
})

