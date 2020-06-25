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


router.get('/sign-up', (req, res) => {

})

router.get('/sign-in', (req, res) => {
    User.findOne({ userName: "12312" }, function (err, film) {
        console.log(film);
    });

})

router.post('/save-user', (req, res) => {

    //5. Створення документа
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });

    if (user.userName && user.email && user.password) {
        if (user.password.length >= 6) {

            var isUserNameExists = false;

            User.findOne({ userName: user.userName }, function (err, name) {
                if (!name)
                    isUserNameExists = true
            });

            if (isUserNameExists) {

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

                    res.redirect('/')
                })
            }
        }
    }
    else {
        res.status(500)
    }
})

module.exports = router;