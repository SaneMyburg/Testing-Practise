const capitalise = require('./capitalise');

test("to capitalise first letter of string", () => {
  expect(capitalise("hello")).toBe("Hello");
});