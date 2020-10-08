const video = require('wdio-video-reporter');

const username = process.env.username || 'standard_user';
const password = process.env.password || 'secret_sauce';

exports.config = {

    account: {
        name: username,
        password: password
    },
    uri: process.env.uri,
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
        
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',
        [video, {
            saveAllVideos: false,       // If true, also saves videos for successful test cases
        }],
        ['allure', {
            outputDir: './_results_/allure-raw',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
}
