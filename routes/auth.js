var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
const { NotExtended } = require('http-errors');

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const userScheme = new Schema({
    userName: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userScheme);

router.post('/sign-up', (req, res) => {
    //5. Створення документа
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });

    if (user.userName && user.email && user.password) {
        if (user.password.length >= 6) {

            user.save(function (err) {
                if (err)
                    return res.status(500)
                else
                    res.status(201)
            });

            jwt.sign({ user: user }, "secretkey", (err, token) => {
                if (err) {
                    return res.status(500).send(err)
                }
                console.log(token);

                res.redirect('/get-pdf')
            })
        }
        else {
            res.sendStatus(500)
        }
    }
    else {
        res.sendStatus(500)
    }
})

router.post('/sign-in', (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({ email: userData.email }, function (err, email) {
        if (email) {

            jwt.sign({ user: user }, "secretkey", (err, token) => {
                if (err) {
                    return res.status(500).send(err)
                }
                console.log(token);

                res.redirect('/get-pdf')
            })

        }

    });

})

module.exports = router;