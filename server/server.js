var express = require('express'),
    app = express(),
    path =  require('path'),
    exphbs = require('express-handlebars'),
    Handlebars = require('handlebars'),
    dataController = require('./utils/dataController');
    jobController = require('./utils/jobController');

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: 'views/partials/'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, './../')));

app.get('/', dataController.getData, dataController.renderJobLinks);
app.get('/job_posting', jobController.getJobDetail, jobController.renderJobDetail)

app.listen(3000, function () {
    console.log('Listening on port 3000');
});
