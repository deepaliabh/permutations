const assert = require('chai').assert;
const expect = require('chai').expect;
const {permutations} = require('./permutations');

describe('#permutations()', function() {
    context('An empty input list', function() {
        it('should return empty array', function() {
            expect(permutations([])).to.have.lengthOf(0);
        })
      });
    context('An input list with 1 number', function() {
        it('should return array with the same number', function() {
            expect(permutations([2])).to.eql([2]);
        })
      });
    context('Input list of 3 numbers without repetition', function() {
      it('should return 6 permutations', function() {
        expect(permutations([1,2,3])).to.have.lengthOf(6);
      })
    });
    context('Input list of 6 numbers without repetition', function() {
        it('should return 720 permutations', function() {
          expect(permutations([1,2,3,4,5,6])).to.have.lengthOf(720);
        })
      });
    context('Input list of 3 numbers with one number repeating', function() {
        it('should return 3 permutations', function() {
          expect(permutations([1,2,1])).to.have.lengthOf(3);
        })
      });
      context('Input list equal to [1,1,2]', function() {
        it('should return 3 permutations [[1,1,2],[1,2,1],[2,1,1]]', function() {
          expect(permutations([1,1,2])).to.eql([[1,1,2],[1,2,1],[2,1,1]]);
        })
      });
      context('Input list equal to [0,1,2,2,2]', function() {
        it('should return 20 permutations [[0,1,2,2,2],[0,2,1,2,2],[ 0, 2, 2, 1, 2 ],[ 0, 2, 2, 2, 1 ],[ 1, 0, 2, 2, 2 ],[ 1, 2, 0, 2, 2 ],[ 1, 2, 2, 0, 2 ],[ 1, 2, 2, 2, 0 ],[ 2, 1, 0, 2, 2 ],[ 2, 1, 2, 0, 2 ],[ 2, 1, 2, 2, 0 ],[ 2, 0, 1, 2, 2 ],[ 2, 0, 2, 1, 2 ],[ 2, 0, 2, 2, 1 ],[ 2, 2, 0, 1, 2 ],[ 2, 2, 0, 2, 1 ],[ 2, 2, 1, 0, 2 ],[ 2, 2, 1, 2, 0 ],[ 2, 2, 2, 1, 0 ],[ 2, 2, 2, 0, 1 ]]', function() {
          expect(permutations([0,1,2,2,2])).to.eql([[0,1,2,2,2],[0,2,1,2,2],[ 0, 2, 2, 1, 2 ],[ 0, 2, 2, 2, 1 ],[ 1, 0, 2, 2, 2 ],[ 1, 2, 0, 2, 2 ],[ 1, 2, 2, 0, 2 ],[ 1, 2, 2, 2, 0 ],[ 2, 1, 0, 2, 2 ],[ 2, 1, 2, 0, 2 ],[ 2, 1, 2, 2, 0 ],[ 2, 0, 1, 2, 2 ],[ 2, 0, 2, 1, 2 ],[ 2, 0, 2, 2, 1 ],[ 2, 2, 0, 1, 2 ],[ 2, 2, 0, 2, 1 ],[ 2, 2, 1, 0, 2 ],[ 2, 2, 1, 2, 0 ],[ 2, 2, 2, 1, 0 ],[ 2, 2, 2, 0, 1 ]]);
        })
      });
      context('Input list of 6 numbers with one number repeating', function() {
        it('should return 360 permutations', function() {
          expect(permutations([1,2,1,3,4,5])).to.have.lengthOf(360);
        })
      });
});

