import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import * as home from "./controllers/home.controller";
import * as apod from "./controllers/apod.controller";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});
app.use(express.static('public'));
app.use(function (err:any, req:any, res:any , next:any) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get("/", home.index);
app.post("/", home.indexPost);
app.get("/api/v1/apod", apod.getApod);

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});

export default app;
