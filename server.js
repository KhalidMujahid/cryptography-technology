const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    return res.status(200).render("index");
  } catch (error) {
    return res.status(501).send(error);
  }
});

app.get("/decrypt", (req, res, next) => {
  try {
    return res.status(200).render("decrypt");
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => console.log("Server running on port", PORT));
