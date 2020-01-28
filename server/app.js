const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth/auth');
const models = require('./models');
const passport = require('passport');

const LocalStrategy = require('passport-local');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const bcrypt = require('bcrypt')
const cors = require('cors')



const port = 5000
app.use(cors())

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function(email, password, done) {
        models
            .Users
            .findAll({
                where: {
                    email: email
                }
            })
            .then((response) => {
                if(!response)
                return done(response);
                if(!response.length){
                    return done(null, false, {info: "We don't know this email"})
                }
                if(!bcrypt.compareSync(password, response[0].password)) {
                    return done(null, false, {info: "Wrong password"})
                }
                console.log('OKKKKKKKKKKKKK')
                return done(null, response[0], { info : "Signed in" })
            })
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'no_shoes_allowed'
},
    function(jwtPayload, done) {
        if (!jwtPayload) {
            return done(null, false, {info : "User couldn't be signed in"})
        }
        return done(null, jwtPayload, {info : "User signed in"})
    }
))

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('This is the root path')
})

app.use((req, res, next) => {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
})

models
    .sequelize
    .sync()
    .then(() => app.listen(port, () => console.log(`Server listening on port ${port}. Message from sync()`)))
