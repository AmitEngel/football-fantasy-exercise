const express = require('express');
<<<<<<< HEAD
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
=======
const dal = require('../DAL');

const router = express.Router();

router.get('/:id', function (req, res) {
    const user = dal.readOne('user', req.params.id);
    delete user['password'];
    res.send(user);
});
>>>>>>> afbb2508e5e10b249f1e9c5add21ecca392bdf69

module.exports = router;