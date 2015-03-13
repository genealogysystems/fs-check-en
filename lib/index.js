var fs = require('fs'),
    path = require('path');

module.exports = {
    birthBeforeParentsBirth: {
        title: 'Person Born Before their Parent(s)',
        description: loadDescription('birthBeforeParentsBirth')
    }
};

function loadDescription(check){
    return fs.readFileSync(path.join(__dirname, 'checks', check+'.md'), {encoding: 'utf8'});
}