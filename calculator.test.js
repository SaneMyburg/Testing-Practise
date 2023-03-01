const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(1, 1)).toEqual(2);
    });
    test('adds a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toEqual(-1);
    });
    test('adds two negative numbers', () => {
      expect(calculator.add(-1, -1)).toEqual(-2);
    });
  });
  describe('subtract', () => {
    test('subtracts a smaller positive number from a larger positive number', () => {
      expect(calculator.subtract(5, 3)).toEqual(2);
    });
    test('subtracts a positive number from a negative number', () => {
      expect(calculator.subtract(-2, 3)).toEqual(-5);
    });
    test('subtracts a larger negative number from a smaller negative number', () => {
      expect(calculator.subtract(-3, -2)).toEqual(-1);
    });
  });
  describe('divide', () => {
    test('divides a larger positive number by a smaller positive number', () => {
      expect(calculator.divide(6, 3)).toEqual(2);
    });
    test('divides a positive number by a negative number', () => {
      expect(calculator.divide(6, -3)).toEqual(-2);
    });
    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrowError('Cannot divide by zero');
    });
  });
  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toEqual(6);
    });
    test('multiplies a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toEqual(-6);
    });
    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toEqual(6);
    });
  });
});