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

router.put('/password/:email', function (req, res) {
    var randomstring = Math.random().toString(36).slice(-8);
    var criptpass=bcrypt.hashSync(randomstring, 10)
    let updatedStatus = await models.Users.update(
        { password: criptpass} 
        ,{
            where: {
                email: req.params.email
            }
        }
    )
          res.send('Passoword changed. ' + randomstring)
})

router.post('/signup', function(req, res, next) {
    let post = {
        firstname: req.body.prenume,
        lastname: req.body.nume,
        phonenumber: req.body.numarTelefon,
        password: bcrypt.hashSync(req.body.parola, 10),
        email: req.body.email,
        volunteering_county: req.body.judetul,
        volunteering_center: req.body.centrul,
        contract_number: req.body.nrcontractului,
        // signing_date: 3,
        // date_joined: Date(),
        access_level: false,
        status: true,
    };
    models
        .Users
        .create(post)
        .then(user =>
            res.status(200).json({ message: "User signed up"})
        )
        .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/access/:level/:id', async function (req, res) {
    let updatedUser = await models.Users.update(
            { access_level: req.params.level }
            ,{
                where: {
                  id: req.params.id
                }
              }
           )
            res.send(updatedUser)
})

router.put('/status/:level/:id', async function (req, res) {
     let updatedStatus = await models.Users.update(
         { status: req.params.level} 
         ,{
             where: {
                 id: req.params.id
             }
         }
     )
           res.send(updatedStatus)
})

router.get('/users', (req,res) => 
   models
   .Users
   .findAll()
   .then(users => res.json(users))
)

router.get('/users/:id', (req,res) =>
    models
    .Users
    .findByPk(req.params.id)
    .then(usersid => res.json(usersid))
 )

 router.get('/completedCourses/:id', (req,res) =>
    models
    .completedCourses
    .findAll({
            where: {
              user_id: req.params.id
            }
          })
    .then(completedCoursesid => res.json(completedCoursesid))
 )

router.post('/completedCourses', (req,res) => {
    let completedCourse = {
        course_id: req.body.course_id,
        user_id: req.body.user_id
    };
    models
        .completedCourses
        .create(completedCourse)
        .then(cc =>
            res.status(200).json({ flash: `Course of id ${req.body.id_curs} was completed by userId ${req.body.id_utilizator}`})
        )
        .catch(err => res.status(500).json({ flash: err.message }))
} )


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
        CategoryCategoryId: req.body.category_id,
        is_important: req.body.important,
        link: req.body.link
    };
    models
        .Courses
        .create(post)
        .then(newCourse => res.status(200).json({ message : "new courses added"}))
        .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/courses', function(req, res, next) {
    models
        .Courses
        .findAll( {include: [models.Categories]})
        .then(courses => res.status(200).json(courses))
})

router.delete('/courses/:id', function(req, res, next) {
    models
        .Courses
        .destroy({ where : {
            id: req.params.id
        }})
        .then(courses => res.status(200).json(courses))
})

router.get('/categories', function(req, res, next) {
    models
    .Categories
    .findAll()
    .then(allCategories => res.status(200).json(allCategories))
})

module.exports = router