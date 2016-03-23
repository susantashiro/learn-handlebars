var request = require('request'),

jobController = {
    getJobDetail: function (req, res, next) {
        request('https://api.lever.co/v0/postings/thrivemarket/' + getParameterByName('id', req.url), function (error, response, body) {
            req.learnHandlebars = {};
            req.learnHandlebars.jobDetail = JSON.parse(body);
            next();
        });
    },
    renderJobDetail: function (req, res) {
        res.render('jobPost', req.learnHandlebars.jobDetail);
    }
};

function getParameterByName(name, url) {
    var regex, results;
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
module.exports = jobController;
