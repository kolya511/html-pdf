var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
const { NotExtended } = require('http-errors');


//1.Імпортували модуль
const mongoose = require("mongoose");

//2. Встановлюємо з"єднання
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true, useUnifiedTopology: true });

//3. Свторюємо схему
const Schema = mongoose.Schema;
// Створення схеми моделі
const userScheme = new Schema({
    userName: String,
    email: String,
    password: String
});

//4. Створення моделі
const User = mongoose.model("User", userScheme);


router.get('/', (req, res) => {
    res.render('homePage', { a: req.user })
})

router.get('/sign-in', (req, res) => {
    res.render('form')
})


router.post('/login', (req, res) => {

    //5. Створення документа
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });
    //6. Збереження документа
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
})

module.exports = router;