const path = require('path');

module.exports = {
    paths: {
        pug: path.join(__dirname, 'application/**/*.pug'),
        sass: path.join(__dirname, 'application/**/*.sass'),
        scripts: path.join(__dirname, 'application/**/*.js')
    }
};