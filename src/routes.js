const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();

// routes.get('/', (req, res) => {
//     return res.json({ msg: "Hello world!" })
// });

routes.post('/registerUser', UserController.registerUser)

module.exports = routes;
