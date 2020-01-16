const express = require('express');
const models = require("./models");
const app = express();



models
 .sequelize
 .sync()
 .then(() => app.listen(3000, () => console.log(`App listening on port 3000!`)));
