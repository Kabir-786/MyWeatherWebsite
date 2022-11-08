const express = require("express");
const path = require("path");
const app = express();
const hbs=require("hbs");
const port = process.env.PORT || 3000;

//PUBLIC STATIC PATH
const staticPath = (path.join(__dirname, "../public"));
const templatePath = (path.join(__dirname, "../templates/views"));
const partialPath = (path.join(__dirname, "../templates/partials"));


app.set('view engine', "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

//ROUTING
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("/*", (req, res) => {
    res.render("404error",{
        errorMsg: "OOPs something wrong"
    });
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})