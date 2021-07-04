// require packages used in the project
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const restaurantList = require("./restaurant.json");
const port = 3000;

// set template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// routes setting
app.get("/", (req, res) => {
  res.render("index", { restaurant: restaurantList.results });
});

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`);
});
