const express = require("express");
const hbs = require("hbs");
const path = require("path");
var bodyParser = require("body-parser");
const sendMail = require("./mail");
const { send } = require("process");
const { Console } = require("console");
const port = process.env.PORT || 3000;

const app = express();

const assets = path.join(__dirname, "/public");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(assets));

// TO SET TEMPLATE ENGINE
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./templates/views"));
const partialspath = path.join(__dirname, "./templates/partials");
hbs.registerPartials(partialspath);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/work", (req, res) => {
  res.render("work");
});
app.get("/sucess", (req, res) => {
  res.render("sucess");
});
app.post("/contact", (req, res) => {
  const { Name, Subject, Email, Message } = req.body;
  sendMail(Name, Subject, Email, Message, (error, data) => {
    if (error) {
      return res.redirect("/404");
    }
    res.redirect("/sucess");
  });
});

app.get("/*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log("server is running on" + port);
});
