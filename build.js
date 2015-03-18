var fs = require('fs'),
    data = require('./lib/index.js'),
    header = '(function(){var data = ',
    footer = ';FSCheck.addLanguage(data);}())';

fs.writeFileSync('fs-check-en.js', header + JSON.stringify(data) + footer);