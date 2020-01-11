const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/gif", (req, res) => {
    console.log(req.query);
    res.json(req.query);
})

app.get("/images", (req, res) =>{
    console.log(req.query);
    res.json(req.query);
})

app.listen(port, () =>{
    console.log("Listening to port", port);
})