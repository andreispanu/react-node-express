const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

var fakeData = require("./storage/db");

//Pull fake db data
const data = {
  buildings: {
    item: [
      {
        id: "1",
        image: "../static/images/1.png",
        buildingName: "Bauhaus Archive",
        buildingAddress1: "7246 Woodland Rd.",
        buildingAddress2: "Waukesha, WI 53186",
        users: "906",
        offices: "36",
        price: "75"
      },
      {
        id: "2",
        image: "../static/images/2.png",
        buildingName: "Lotus Temple",
        buildingAddress1: "164 S. Carson Court",
        buildingAddress2: "Newport News, VA 23601",
        users: "876",
        offices: "20",
        price: "65"
      },
    ]
  },
};

var async = require("express-async-await");
var fetch = require("node-fetch");

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
  },
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

app.get("/", (req, res) => res.send("Api running"));
app.get("/buildings", (req, res, next) => {
  res.send(data);
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
