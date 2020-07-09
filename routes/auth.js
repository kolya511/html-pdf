var express = require('express');
var router = express.Router();
var apidoc = require("apidoc")
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

/**
 * @api {post} /sign-up Sign Up
 * @apiName Sign Up
 * @apiGroup Auth
 * @apiError Status500
 * @apiSuccess Redirect to /get-pdf
 */
router.post('/sign-up', async (req, res) => {

    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password// зашифрувати парль
    });

    if (user.userName && user.email && user.password) {
        if (user.password.length >= 6) {

            var userName = await User.findOne({ userName: user.userName });

            if (!userName) {

                user.save(function (err) {
                    if (err)
                        return res.status(500)
                    else
                        res.status(201)
                });

                jwt.sign({ user: user }, "secretkey", (err, token) => {

                    if (err) {
                        return res.status(500)
                    }

                    else
                        res.status(201).json(token)
                })
            }
            else {
                res.sendStatus(500)
            }
        }
        else {
            res.sendStatus(500)
        }
    }
    else {
        res.sendStatus(500)
    }
})

/**
 * @api {post} /sign-in Sign In
 * @apiName Sign In
 * @apiGroup Auth
 * @apiError Status500  success: false, err: msg: login is not success
 * @apiSuccess  Success true, msg: login is success 
 */

router.post('/sign-in', async (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password// зпереврити парль
    }

    var user = await User.findOne({ email: userData.email, password: userData.password });


    if (user) {
        return jwt.sign({ user: user }, "secretkey", (err, token) => {

            if (err) {
                return res.status(500)
            }

            else
                res.status(201).json(token)
        })
    }
    else {
        res.status(500)
    }
})

module.exports = router;