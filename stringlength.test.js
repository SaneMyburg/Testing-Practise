const stringLength = require('./stringlength');

test('stringLength returns the correct length', () => {
  expect(stringLength('hello')).toBe(5);
});
test('stringLength throws an error if the string is too short', () => {
  expect(() => stringLength('')).toThrow('String must be between 1 and 10 characters long');
});
test('stringLength throws an error if the string is too long', () => {
  expect(() => stringLength('this string is too long')).toThrow('String must be between 1 and 10 characters long');
});