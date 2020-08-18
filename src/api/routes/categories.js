var express = require('express');
var router = express.Router();

const categories = require("../jsons/categories.json");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Categories is working properly")
});

//Get list of categories
router.get('/list', function (req, res, next) {
    res.json({
        data: categories
    })
});

module.exports = router;
