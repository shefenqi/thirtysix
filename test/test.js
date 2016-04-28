var should = require('should');

var thirtysix = require('../index');

describe('thirtysix', function() {

  describe('#toString()', function() {
    it('should return currect result', function() {
      thirtysix.toString(-1234).should.equal('-ya');
      thirtysix.toString(0).should.equal('0');
      thirtysix.toString(201314).should.equal('4bc2');
      thirtysix.toString(999999999999).should.equal('cre66i9r');
    });
  });

  describe('#parseInt()', function() {
    it('should return currect result', function() {
      thirtysix.parseInt('-ya').should.equal(-1234);
      thirtysix.parseInt('0').should.equal(0);
      thirtysix.parseInt('4bc2').should.equal(201314);
      thirtysix.parseInt('cre66i9r').should.equal(999999999999);
    });
  });

});