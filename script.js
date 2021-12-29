const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let tasks = [];

app.get("/", function (req, res) {
    let today = new Date();
    let Option = { weekday: 'long', day: 'numeric', month: 'short' };
    const value = today.toLocaleDateString("en-US", Option);
    res.render("list", { day: value, task: tasks });
})

app.post("/", function (req, res) {
    let newTask = req.body.task;
    tasks.push(newTask);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("servers is live on port-3000");
})