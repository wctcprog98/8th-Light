const assert = require('chai').assert; 
const expect = require('chai').expect; 
const sayHello = require("../app").sayHello; 
const nonNumerical = require('../app').nonNumerical;
const noDuplicates = require('../app').noDuplicates; 

describe('App', function() {
    it('sayHello should return hello', function() {
        let result = sayHello(); 
        let actual = 'hello'
        assert.equal(result, actual);
    });
    it('should return 763', function(){
        let result = nonNumerical('%ac++==7--6-@3');
        let actual = '763'
        assert.equal(result, actual);
    });

    it('should return a string', function() {
        let result = nonNumerical('asdln4252');
        assert.typeOf(result, 'string'); 
    });

    it('should return no duplicates abcd', function(){
        let result = noDuplicates('aabbccd');
        let expected = ['a', 'b', 'c', 'd']
        expect(result).eql(expected); 
    });
});