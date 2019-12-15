var express = require('express');
var router = express.Router();

var teams = [];
teams.push({teamName:'Black', members:'khusnullin-chuiko'});
teams.push({teamName:'Red', members:'snow-shevchuk'});
teams.push({teamName:'White', members:'dovhan-skurchak'});

router.get('/', function(req, res, next) {
    let memberLastName = req.headers['lastname'];
    if(!memberLastName) res.send('Incorrect header. Please try again.');

    try {
        let team = teams.find(element => element.members.includes(memberLastName));
        res.send('Congratulations! You have successfully completed the first task. You are in the "' + team.teamName + '" team. Go ahead and find your teammate. Good luck!');
    } catch (e) {
        res.send('Incorrect Last Name. Please try again.');
    }
});

module.exports = router;