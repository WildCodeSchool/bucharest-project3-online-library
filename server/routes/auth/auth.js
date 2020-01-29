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
        lastname: req.body.prenume,
        phonenumber: req.body.numarTelefon,
        password: bcrypt.hashSync(req.body.parola, 10),
        email: req.body.email,
        volunteering_county: req.body.judetul,
        volunteering_center: req.body.centrul,
        contract_number: req.body.nrcontractului,
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

router.get('/users', (req,res) => 
   models
   .Users
   .findAll()
   .then(users => res.json(users))
)

module.exports = router