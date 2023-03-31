const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser"); 
// const fs = require("fs");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true })); 

router.get("/", (req, res) => {
  res.render("link");
});
router.get("/index", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  // const data= JSON.parse(fs.readFileSync("data.json"));

  // const user = data.users.find((user) => user.name === name && user.password === password);

  if  (name==="dark"&& password==="shadow"){
    res.render("success", {
      username: name,
    });
  } else {
    res.render("failure");
  }
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Hey", message: "The file is getting rendered" });
});

app.use("/", router);
app.listen(process.env.PORT || 3000, () => { 
  console.log("Running at Port 3000");
});
