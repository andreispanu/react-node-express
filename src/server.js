const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

//Pull fake db data
const data = require('./storage/db');

var async = require('express-async-await')
var fetch = require('node-fetch')

/*****************************************
 * CORS WHITELIST & OPTIONS
 *****************************************/
let whitelist = ["http://localhost:3000"];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

/***************************************************
 * USE CORS
 ***************************************************/
app.use(cors(corsOptions));

/***************************************************
 * AUTH MIDDLEWARE
 ***************************************************/
app.use(async (req, res, next) => {
  /***********************************************************
   * ADD THE AUTHING FUNC IN HERE ON SUCCESS CALL NEXT ELSE
   * return res.status(403).json({
        error: "denied"
      });
   *********************************************************/
  next();
});

// app.get("/", (req, res) => res.send("Api running"));
app.get("/", (req, res) => res.send(data));

app.get("/test", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
