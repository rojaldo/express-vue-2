import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const cors = require('cors')

import * as home from "./controllers/home.controller";
import * as apod from "./controllers/apod.controller";
import * as heroes from "./controllers/heroes.controller";
import * as library from "./controllers/library.controller";

dotenv.config();

const app = express();


app.set("port", process.env.PORT || 3000);

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:postgres@localhost:5432/database");

db.one("SELECT $1 AS value", 123)
    .then(function (data: any) {
        console.log("DATA:", data.value);
    })
    .catch(function (error: any) {
        console.log("ERROR:", error);
    });

// CORS
app.use(cors())

// add body parser middleware
app.use(bodyParser.json());

// add static folder
app.use(express.static(__dirname + "/public"));


app.get("/", home.index);
app.post("/", home.indexPost);
app.get("/api/v1/apod", apod.getApod);

app.get("/api/v1/heroes", heroes.getHeroes);
app.post("/api/v1/heroes", heroes.postHeroes);
app.delete("/api/v1/heroes", heroes.deleteHeroes);

app.get("/api/v1/library/users", library.getUsers);
app.post("/api/v1/library/users", library.postUsers);
app.put("/api/v1/library/users", library.putUsers);
app.delete("/api/v1/library/users", library.deleteUsers);

// send error message for a route not found
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "Not Found"
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});

export default app;
