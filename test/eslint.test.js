const eslint = require('eslint');
const assert = require('assert');

const testType = process.argv[2] || 'standard';
const fileType = {
    standard: '.js',
    vue: '.vue',
    react: '.jsx'
};

const cliConfig = {
    configFile: './' + testType + '/.eslintrc.js'
};
const goodFile = './' + testType + '/**/good' + fileType[testType];
const badFile = './' + testType + '/**/bad' + fileType[testType];

let cli = eslint.CLIEngine(cliConfig);

let goodReport = cli.executeOnFiles([goodFile]);
let badReport = cli.executeOnFiles([badFile]);