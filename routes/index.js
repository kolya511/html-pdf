var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var pdf = require('html-pdf');
var htmlFunc = require('../html/index.js');


router.get('/get-pdf', function (req, res, next) {
    var html = htmlFunc({
        param1: req.query.param1,
        param2: req.query.param2
    });
    pdf.create(html).toStream(function (err, stream) {
        if (err) {
            return next(err)
        } else {
            res.set('Content-type', 'application/pdf');
            stream.pipe(res)
        }
    });
});

module.exports = router;