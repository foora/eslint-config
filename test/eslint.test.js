const eslint = require('eslint');
const assert = require('assert');

const testType = process.argv[2];
if (!testType) {
    console.log('warning: please choose one type to test');
    return;
}
const fileType = {
    standard: '.js',
    vue: '.vue',
    react: '.jsx'
};

const goodFile = './test/' + testType + '/**/good' + fileType[testType];
const badFile = './test/' + testType + '/**/bad' + fileType[testType];

let cli = new eslint.CLIEngine();

let goodTestReport = cli.executeOnFiles([goodFile]);
let badTestReport = cli.executeOnFiles([badFile]);

goodTestReport.results.forEach((result) => assert.equal(result.errorCount, 0, `${result.filePath} have ${result.errorCount} error`));
badTestReport.results.forEach((result) => assert.notEqual(result.errorCount, 0, `${result.filePath} have no error`));

console.log(`test ${testType} pass`);