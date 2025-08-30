const express = require("express");
const { getAllUsers, saveUser } = require("./lib/db");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", "pages");

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/add", (req, res) => {
  res.render("add");
})

app.get("/users", async(req, res) => {
  const users = await getAllUsers()
  res.render("list", { users });
})

app.post("/add", async(req, res) => {
  await saveUser({...req.body, id: Date.now()});
  res.redirect("/users");
})

app.listen(4009, () => console.log("http://localhost:4009"));
