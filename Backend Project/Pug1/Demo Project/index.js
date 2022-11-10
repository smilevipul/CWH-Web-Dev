const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;


app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","pug");

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
