var express = require('express'),
    app = express(),
    path =  require('path'),
    exphbs = require('express-handlebars'),
    Handlebars = require('handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    // res.sendFile('index');
    res.render('index', {
        jobTitle: "Full-Stack Developer",
        team: "Engineering",
        location: "Los Angeles, CA",
        commitment: 'Full-time',
        summary: '<i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus quia, quod minima nobis et veritatis provident magnam voluptate rem consequatur exercitationem pariatur distinctio quisquam hic inventore ut repudiandae totam!</i>',
        items: [
            {subheader: "Responsibilities", details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores vero minima doloremque necessitatibus molestiae natus provident quas, tempore voluptas accusamus magni autem placeat, fuga, est, architecto earum totam? Magni?'},
            {subheader: "Qualifications", details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolores vero minima doloremque necessitatibus molestiae natus provident quas, tempore voluptas accusamus magni autem placeat, fuga, est, architecto earum totam? Magni?'}
        ]
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});
