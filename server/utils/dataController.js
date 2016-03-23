var request = require('request'),

dataController = {
    getData: function (req, res, next) {
        request('https://api.lever.co/v0/postings/thrivemarket?mode=json', function (error, response, body) {
            req.learnHandlebars = {};
            req.learnHandlebars.jobs = JSON.parse(body);
            next();
        });
    },
    renderJobLinks: function (req, res) {
        res.render('index', req.learnHandlebars);
    }
};

module.exports = dataController;
