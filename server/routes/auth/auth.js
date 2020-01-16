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
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        password: bcrypt.hashSync(req.body.password, 5),
        email: req.body.email,
        volunteering_county: req.body.volunteering_county,
        volunteering_center: req.body.volunteering_center,
        contract_number: req.body.contract_number,
        signing_date: req.body.signing_date,
        date_joined: req.body.date_joined,
        access_level: req.body.access_level,
        status: req.body.status
    };
    models
        .Users
        .create(post)
        .then(user =>
            res.status(200).json({ flash: "User signed up"})
        )
        .catch(err => res.status(500).json({ flash: err.message }))
})

module.exports = router