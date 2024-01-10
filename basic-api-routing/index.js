// basic expressjs server
const express = require("express");

const app = express();
const port = 8000;

// get all users
app.get("/users", (req, res) => {
  let users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => res.json(json));
});

// get user by id
app.get("/users/:id", (req, res) => {
  let user = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      let user = json.filter((user) => user.id == req.params.id);
      res.json(user);
    });
});

// testing route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// testing port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
