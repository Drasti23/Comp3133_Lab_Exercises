// Name: Drasti Parikh
// Student id: 101419828

import { assert } from 'chai';
import * as calculator from '../app/calculator.mjs';

describe('Calculator Tests', function() {
  describe('Addition', function() {
    it('should return 7 when adding 5 and 2', function() {
      assert.equal(calculator.add(5, 2), 7); // PASS test
    });

    it('should return 8 when adding 5 and 2', function() {
      assert.equal(calculator.add(5, 2), 8); // FAIL test
    });
  });

  describe('Subtraction', function() {
    it('should return 3 when subtracting 2 from 5', function() {
      assert.equal(calculator.sub(5, 2), 3); // PASS test
    });

    it('should return 5 when subtracting 2 from 5', function() {
      assert.equal(calculator.sub(5, 2), 5); // FAIL test
    });
  });

  describe('Multiplication', function() {
    it('should return 10 when multiplying 5 and 2', function() {
      assert.equal(calculator.mul(5, 2), 10); // PASS test
    });

    it('should return 12 when multiplying 5 and 2', function() {
      assert.equal(calculator.mul(5, 2), 12); // FAIL test
    });
  });

  describe('Division', function() {
    it('should return 5 when dividing 10 by 2', function() {
      assert.equal(calculator.div(10, 2), 5); // PASS test
    });

    it('should return 2 when dividing 10 by 2', function() {
      assert.equal(calculator.div(10, 2), 2); // FAIL test
    });
  });
});
