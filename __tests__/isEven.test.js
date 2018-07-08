import isEven from '../src/isEven';

test('odd numbers', () => {
  const numbers = [0, 2, 4, 8, 158, 5554, 666666, -2, -10, -888, -10000002];
  numbers.forEach(item => expect(isEven(item)).toBeTruthy());
});

test('even numbers', () => {
  const numbers = [1, 21, 1653, 1555, 16497, 2654485, -83, -269, -1529, -16497, -2654485];
  numbers.forEach(item => expect(isEven(item)).toBeFalsy());
});
