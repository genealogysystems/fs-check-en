var fs = require('fs'),
    path = require('path');

var data = module.exports = {
    birthBeforeParentsBirth: {
        title: 'Person Born Before their Parent(s)'
    },
    childBeforeMarriage: {
        title: 'Child Born Before Marriage'
    },
    childrenTooClose: {
        title: 'Children Too Close'
    },
    deathBeforeBirth: {
        title: 'Person Died Before They Were Born'
    },
    duplicateNames: {
        title: 'Identical Names'
    },
    manyAlternateNames: {
        title: 'Many Alternate Names'
    },
    marriageAfterDeath: {
        title: 'Marriage After Death'
    },
    marriageWithNoChildren: {
        title: 'Marriage with no Children'
    },
    missingBirth: {
        title: 'Find a Birth'
    },
    missingBirthDate: {
        title: 'Find a Birth Date'
    },
    missingBirthPlace: {
        title: 'Find a Birth Place'
    },
    missingBirthSource: {
        title: 'Find a Birth Record'
    },
    missingDeath: {
        title: 'Find a Death'
    },
    missingDeathDate: {
        title: 'Find a Death Date'
    },
    missingDeathPlace: {
        title: 'Find a Death Place'
    },
    missingDeathSource: {
        title: 'Find a Death Record'
    },
    missingFather: {
        title: 'Missing a Father'
    },
    missingGivenName: {
        title: 'Missing a Given Name'
    },
    missingMarriageDate: {
        title: 'Find a Marriage Date'
    },
    missingMarriageFact: {
        title: 'Find a Marriage'
    },
    missingMarriagePlace: {
        title: 'Find a Marriage Place'
    },
    missingMarriageSource: {
        title: 'Find a Marriage Record'
    },
    missingMother: {
        title: 'Missing a Mother'
    },
    missingName: {
        title: 'Missing a Name'
    },
    missingParents: {
        title: 'Missing Parents'
    },
    missingSurname: {
        title: 'Missing a Surname'
    },
    multipleMarriageFacts: {
        title: 'Multiple Marriage Facts'
    }
};

for(var check in data){
    data[check].description = loadDescription(check);
}

function loadDescription(check){
    return fs.readFileSync(path.join(__dirname, 'checks', check+'.md'), {encoding: 'utf8'});
}