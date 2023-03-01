const reverseString = require('./stringreversed');

test('to reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});