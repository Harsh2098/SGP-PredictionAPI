const request = require("request");

function refreshLocalDatabase(connection) {
  request.get(
    "http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2",
    {
      headers: {
        Accept: "application/json",
        AccountKey: "EPEcmrGzRWeN4824xfuvoQ=="
      }
    },
    (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        const carParks = JSON.parse(body).value;
        for (currentCarPark in carParks) {
          const today = new Date();
          const data = {
            id: currentCarPark.CarParkID,
            availableLots: currentCarPark.AvailableLots,
            weekend: today.getDay() == 6 || today.getDay() == 0,
            minuteOfDay: dt.getMinutes() + 60 * dt.getHours(),
            time: Date.now()
          };
          connection.query(
            "INSERT INTO prediction-dataset VALUES ?",
            data,
            (err, res) => {
              if (err) {
                console.log(err);
                return;
              }
            }
          );
        }
      }
    }
  );
}

module.exports = refreshLocalDatabase;
