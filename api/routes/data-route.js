const express = require("express");
const request = require("request");
const router = express.Router();

var rawBody = ""
var fromApi = true;

router.get("/", (req, res, next) => {

  if (fromApi || rawBody == "") {

    setTimeout(() => fromApi = true, 60000);
    fromApi = false;

    console.log("Getting data from DataMall API");

    request.get(
      "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2/", {
        headers: {
          Accept: "application/json",
          AccountKey: "EPEcmrGzRWeN4824xfuvoQ=="
        }
      },
      (err, response, body) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        }

        rawBody = body;
        res.status(200).json(JSON.parse(body));
      }
    );
  } else {
    console.log("Getting data from local cache");
    res.status(200).json(JSON.parse(rawBody));
  }
});

module.exports = router;
