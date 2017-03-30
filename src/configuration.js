const path = require('path');

module.exports = {
    paths: {
        pug: path.join(__dirname, 'application/**/*.pug'),
        sass: path.join(__dirname, 'application/**/*.scss'),
        scripts: path.join(__dirname, 'application/**/*.js')
    }
};