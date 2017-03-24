const path = require('path');

module.exports = {
    paths: {
        sass: path.join(__dirname, 'components/**/*.sass'),
        pug: path.join(__dirname, 'components/**/*.pug')
    }
};