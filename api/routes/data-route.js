const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/core", (req, res, next) => {
    request.get(
        "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2/",
        {
          headers: {
            Accept: "application/json",
            AccountKey: "EPEcmrGzRWeN4824xfuvoQ=="
          }
        },
        (err, response, body) => {
           if(err) {
               console.log(err);
           }
           res.status(200).json(JSON.parse(body));
        }
      );
});

module.exports = router;