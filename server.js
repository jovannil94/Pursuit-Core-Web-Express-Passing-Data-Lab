const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let pixyKey = "14881651-1e1228a1f06e5912049e890d8";
let gifKey = "eZzQ4D3kLuqDmPlQUgDqmlD9dGc4JZl1";

app.get("/gif", async(req, res) => {
    console.log(req.query);
    res.json(req.query);
})

app.get("/images", async (req, res) =>{
    try{
        console.log(req.query)
        let response = await axios.get(`https://pixabay.com/api/?key=${pixyKey}&q=${req.query.q}`)
        let url = []
        response.data.hits.forEach(pic=>{
            console.log(pic)
            url.push(pic.largeImageURL)
        })
        console.log(req.query);
        res.json({
            status: 200,
            // url: pic.largeImageURL
        });
    } catch(err) {
        console.log(err)
    }
})

app.listen(port, () =>{
    console.log("Listening to port", port);
})