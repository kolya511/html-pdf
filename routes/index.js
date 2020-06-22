var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var fs = require('fs');
var pdf = require('html-pdf');
var htmlFunc = require('../test/index.js');

router.get('/get-params', function (req, res, next) {

    jwt.verify(req.token, 'secretkey', (err) => {
        if (err) { 
            res.sendStatus(403)
        }
        else {
            var html = htmlFunc({
                param1: req.query.param1,
                param2: req.query.param2
            });
            pdf.create(html).toStream(function (err, stream) {
                if (err) {
                    console.log(err)
                } else {
                    res.set('Content-type', 'application/pdf');
                    stream.pipe(res)
                }
            });
        }
    })
});

module.exports = router;