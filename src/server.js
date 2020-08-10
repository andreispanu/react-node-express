const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

//Pull db data
const data = {
  buildings: {
    item: [
      {
        id: "1",
        image: "./static/images/1.png",
        buildingName: "Bauhaus Archive",
        buildingAddress1: "7246 Woodland Rd.",
        buildingAddress2: "Waukesha, WI 53186",
        users: "906",
        offices: "36",
        price: "75"
      },
      {
        id: "2",
        image: "./static/images/2.png",
        buildingName: "Lotus Temple",
        buildingAddress1: "164 S. Carson Court",
        buildingAddress2: "Newport News, VA 23601",
        users: "876",
        offices: "20",
        price: "65"
      },
      {
        id: "3",
        image: "./static/images/3.png",
        buildingName: "Dome of the Rock",
        buildingAddress1: "123 Johnson Court ",
        buildingAddress2: "Roy, UT 84067",
        users: "564",
        offices: "46",
        price: "96"
      },
      {
        id: "4",
        image: "./static/images/4.png",
        buildingName: "Lloyd's Building",
        buildingAddress1: "36 Squaw Creek Dr.",
        buildingAddress2: "Harleysville, PA 19438",
        users: "466",
        offices: "120",
        price: "120"
      },
      {
        id: "5",
        image: "./static/images/5.png",
        buildingName: "Lloyd's Building",
        buildingAddress1: "36 Squaw Creek Dr.",
        buildingAddress2: "Harleysville, PA 19438",
        users: "466",
        offices: "120",
        price: "120"
      },
      {
        id: "6",
        image: "./static/images/6.png",
        buildingName: "Lloyd's Building",
        buildingAddress1: "36 Squaw Creek Dr.",
        buildingAddress2: "Harleysville, PA 19438",
        users: "466",
        offices: "120",
        price: "120"
      },
    ]
  },
};

var async = require("express-async-await");
var fetch = require("node-fetch");

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

app.use(cors(corsOptions));

app.use(async (req, res, next) => {
  next();
});

app.get("/", (req, res) => res.send("Api running"));
app.get("/buildings", (req, res, next) => {
  res.send(data);
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
