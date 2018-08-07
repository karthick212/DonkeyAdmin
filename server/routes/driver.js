const express = require('express');
const router = express.Router();
const driverActivity = require('../controller/driver-Controller');
const jwt = require('jsonwebtoken');

router.get('/FetchAllDetails', function (req, res, next) {
    driverActivity.FetchAllDetails((err, rows) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
