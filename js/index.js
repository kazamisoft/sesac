const express = require("express")
const cors = require("cors");
const compression = require("compression");
const {a, b } = require("./dummy")
// import {a, b} from "./dummy.js";
const app = express();

console.log(`index.js started.`);

// 미들웨어 설정
app.use(cors());

// body
app.use(express.json());

// HTTP
app.use(compression());

// Get
app.get("/", (req, res) => {
  console.log(`HTTP GET /`);
  res.send("Hello, Express");
  res.end();
});

app.get("/users", (req, res) => {
  console.log(`HTTP GET /users`)
  const name = req.body.name;
  res.send(name);
  res.end();
});

app.listen(3000, () => {
  console.log('listen on port 3000');
})