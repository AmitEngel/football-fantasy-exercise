const express = require('express');
const dal = require('../DAL');
const uuidv4 = require('uuid').v4;

const router = express.Router();

router.post('/login', function (req, res) {
    const { email, pass } = req.body;
    const user = dal.readOneByQuery('user', u => u.password === pass && u.email === email);
    user && delete user['password'];
    res.type('.txt').send("xyz123");
})

router.post('/register', function (req, res) {
    const user = {
        id: uuidv4(),
        first: req.body['first'],
        last: req.body['last'],
        email: req.body['email'],
        password: req.body['password'],
        playerIds: []
    }

    dal.add('user', user);
    delete user['password'];
    res.send(user);
})

module.exports = router;