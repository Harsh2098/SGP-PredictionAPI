const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "GET route working",
        value: [
            {
                "CarParkID": "1",
                "PredictedAvailableLots": "547"
            },
            {
                "CarParkID": "2",
                "PredictedAvailableLots": "123"
            }
        ]
    });
});

module.exports = router;