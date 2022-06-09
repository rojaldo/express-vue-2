import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import * as home from "./controllers/home.controller";
import * as apod from "./controllers/apod.controller";
import * as heroes from "./controllers/heroes.controller";

dotenv.config();

const app = express();


app.set("port", process.env.PORT || 3000);
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});
// set static folder for public files

// add body parser middleware
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));


app.get("/", home.index);
app.post("/", home.indexPost);
app.get("/api/v1/apod", apod.getApod);
app.get("/api/v1/heroes", heroes.getHeroes);
app.post("/api/v1/heroes", heroes.postHeroes);

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
