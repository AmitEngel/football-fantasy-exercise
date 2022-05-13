const express = require('express');
const dal = require('./../DAL');
const uuidv4 = require('uuid').v4;
const router = express.Router();

router.get('/', function (req, res) {
    const users = dal.read('user');
    res.send(users);
});

router.post('/', function (req, res) {
    console.log(req.body)
    const user = {
        id: uuidv4(),
        first: req.body['first'],
        last: req.body['last'],
        email: req.body['email'],
        password: req.body['password'],
        playerIds: []
    }
    dal.add('user', user);
    res.send(user);
})

module.exports = router;