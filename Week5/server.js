const express = require("express");
const app = express();
const PORT = 3000;
// Import route file
const projectsRoute = require("./routes/projects");
// Mount the route at /api/projects
app.use("/api/projects", projectsRoute);
// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});
// food routes
app.use("/api/food", require("./routes/food"));
app.listen(PORT, () => {
  console.log(`Server is running at
http://localhost:${PORT}`);
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});
