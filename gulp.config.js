/**
 * Created by Josue on 22/11/16.
 */
'use strict';

module.exports = function () {
    const pkg = require('./package.json');

    const server = './server/';
    const src = './src/'
    const scssfolder = `${src }scss/`;
    const mainscss = `${scssfolder }styles.scss`;
    const build = './build/';
    const appFolder = `${src}app/`;
    const index = `${src }index.html`;

    const config = {
        projectName: pkg.name,
        appFolder,
        app: `${appFolder }app.module.js`,
        scssfolder,
        mainscss,
        angularRootApp: `${appFolder}core/`,
        build,
        index,
        src,
        images: `${src }images/`,
        fonts: `${scssfolder }fonts/`,
        vendorfolder: `${src }vendor/`,
        templateCache: {
            file: 'app.templates.js',
            options: {
                module: 'todos',
                moduleSystem: "IIFE"
            }
        },
        jsOrder: ['**/app.module.js', '**/*.module.js', '**/*.js'],
        files: {
            sass: `${src}**/*.scss`,
            js: [`${src}**/*.js`, `!${src}**/*.templates.js`],
            html: `${src}**/*.html`,
            jade: `${src}**/*.jade`

        }
    };

    return config;
};
