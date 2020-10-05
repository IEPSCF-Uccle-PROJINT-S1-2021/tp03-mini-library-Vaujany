const express = require('express');
const logger = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(logger('dev'));
app.get('/books',express.books('webContent'));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req,res) =>{
    res.redirect("/books/seachForm.html")
});

app.post("/books/list",(req,res) =>{
    const username  = req.body.name

    const book1 = {
       auteur: "Guillaume Debré",
       titre:  "L'affaire Lafayette",
       category: "roman historique"
    }
});
app.listen(4242,() =>{
  console.log('http://127.0.0.1:4242')
});
