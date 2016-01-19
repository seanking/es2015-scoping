'use strict';

var assert = require('assert');

describe('ES2015 ', () => {
  describe('Function Scoping', () => {
    it('should provide unexpected results', (done) => {
      // Given
      const count = 3;

      // When
      countWithFunctionScope(count, (results) => {
        // Then
        assert.deepEqual(results, [3, 3, 3]);
        done();
      });
    });
  });

  describe('Block Scoping ', () => {
    it('should provide expected results', (done) => {
      // Given
      const count = 3;

      // When
      countWithBlockScope(count, (results) => {
        // Then
        assert.deepEqual(results, [0, 1, 2]);
        done();
      });
    });
  });
});


function countWithFunctionScope(max, callback) {
  const count = [];
  for (var i = 0; i < max; i++) {
    setTimeout(() => {
      count.push(i);

      if (count.length === max) {
        callback(count);
      }
    }, 1000);
  }
}

function countWithBlockScope(max, callback) {
  const count = [];
  for (let i = 0; i < max; i++) {
    setTimeout(() => {
      count.push(i);

      if (count.length === max) {
        callback(count);
      }
    }, 1000);
  }
}
