var data = require('../'),
    expect = require('chai').expect;

describe('fs-check-en', function(){
    
    it('proper number of checks', function(){
        expect(Object.keys(data).length).to.equal(27);
    })
    
    it('all checks have a title and description', function(){
        for(var name in data){
            try {
                expect(data[name].title).to.have.length.above(1);
                expect(data[name].description).to.have.length.above(1);
                expect(data[name].description).to.contain('\n');
            } catch(e) {
                console.error('Error validating ' + name);
                throw(e);
            }
        }
    })
    
})