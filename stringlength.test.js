const stringLength = require('./stringlength');

test('stringLength returns the correct length', () => {
  expect(stringLength('hello')).toBe(5);
});
test('if string is too short', () => {
  expect(() => stringLength('')).toThrow('String must be between 1 and 10 characters long');
});
test('if string is too long', () => {
  expect(() => stringLength('this string is too long')).toThrow('String must be between 1 and 10 characters long');
});