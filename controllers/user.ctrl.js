const express = require('express');
const dal = require('../DAL');

const router = express.Router();

router.get('/:id', function (req, res) {
    const user = dal.readOne('user', req.params.id);
    delete user['password'];
    res.send(user);
});

module.exports = router;