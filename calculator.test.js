const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('multiply -2 * 3 to equal -6', () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide -6 / 3 to equal -2', () => {
  expect(calculator.divide(-6, 3)).toBe(-2);
});

test('divide by zero throws error', () => {
  expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});
