const express = require('express');
const app = express();
const path = require('path');
const bp = require("body-parser");
const uuid = require('uuid').v4;
const typedefs = require('./typedefs');
app.use(bp.urlencoded({ extended: true }));

const PORT = 3456;

app.get('/api/player', function (req, res) {
    res.sendFile(path.join(__dirname , './data/players.json'));
});
app.get('/api/team', function (req, res) {
    res.sendFile(path.join(__dirname , './data/teams.json'));
})
app.get('/api/player/position', function (req, res) {
    res.send(["Forward",
        "Midfielder",
        "Defender",
        "Goalkeeper"]);
});

app.post('/api/player', function (req, res) {
/**@type {typedefs.FootballPlayer} */
    const player = {
        id: uuid(),
        name: req.body['player-name'],
        team: req.body['player-team'],
        position: req.body['player-position']
    }
    res.send(player);
    console.log(req.body);
})


app.use('/', express.static('public'));

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
