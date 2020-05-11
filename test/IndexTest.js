const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
    afterEach(async function(){
        server.close();
    })
    it('should return a string', () => {
        expect('ci with travis').to.equal('ci with travis');
    });
});