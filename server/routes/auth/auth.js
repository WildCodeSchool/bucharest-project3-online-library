const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const models = require('../../models');
const bcrypt = require('bcrypt')

router.post('/signin', function(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if(err) return res.status(500).send(err);
        if(!user) return res.status(400).json({ message: info });
            const token = jwt.sign({ user }, 'no_shoes_allowed');
        return res.json({ user, token, message: info})
    }) (req, res)
})

router.post('/signup', function(req, res, next) {
    let post = {
        firstname: req.body.nume,
        lastname: req.body.nume,
        phonenumber: req.body.numarTelefon,
        password: bcrypt.hashSync(req.body.parola, 10),
        email: req.body.email,
        volunteering_county: req.body.judetul,
        volunteering_center: req.body.centrul,
        contract_number: req.body.contractului,
        signing_date: req.body.dataSemnarii,
        date_joined: Date(),
        access_level: true,
        status: true
    };
    models
        .Users
        .create(post)
        .then(user =>
            res.status(200).json({ message: "User signed up"})
        )
        .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/categories', function(req, res, next) {
    let post = {
        category_name: req.body.category
    };
    models
        .Categories
        .create(post)
        .then(cat => res.status(200).json({ message : "new category added"}))
        .catch(err => res.status(500).json({ message: err.message}))
})

router.post('/courses', function(req, res, next) {
    let post = {
        title: req.body.title,
        description: req.body.description,
        category_id: req.body.category_id,
        is_important: req.body.important,
        link: req.body.link
    };
    models
        .Courses
        .create(post)
        .then(newCourse => res.status(200).json({ message : "new courses added"}))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/categories', function(req, res, next) {
    models
    .Categories
    .findAll()
    .then(allCategories => res.status(200).json(allCategories))
})

module.exports = router