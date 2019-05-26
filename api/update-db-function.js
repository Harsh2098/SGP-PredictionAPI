const request = require('request');

function refreshLocalDatabase() {
    request.get(
      "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2",
      {
        headers: {
          Accept: "application/json",
          AccountKey: "EPEcmrGzRWeN4824xfuvoQ=="
        }
      },
      (err, res, body) => {
        if(err) {
            console.log(err);
        }
      }
    );
  }

  module.exports = refreshLocalDatabase;