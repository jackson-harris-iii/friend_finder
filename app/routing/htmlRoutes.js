const path = require('path');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/public/home.html'))
};

exports.survey = (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/public/survey.html'))
};

