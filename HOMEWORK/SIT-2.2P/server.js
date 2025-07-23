const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// addition
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid numbers");
  }
  const result = a + b;
  res.send(`Result: ${result}`);
});

// subtraction
app.get("/subtract", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send(`Result: ${a - b}`);
});

// multiplication
app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  res.send(`Result: ${a * b}`);
});

//division
app.get("/divide", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (b === 0) {
    return res.status(400).send("Cannot divide by zero");
  }
  res.send(`Result: ${a / b}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
