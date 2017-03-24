const express = require('express');
const path = require('path');

const application = express();

application.set('views', path.join(__dirname, '../views'));
application.set('view engine', 'pug');

application.use('/static', express.static(path.join(__dirname, '../public')));
application.use('/static', express.static(path.join(__dirname, '../bower_components')));

application.get('/', function (request, response) {
    response.render('index');
});

application.listen(3000);