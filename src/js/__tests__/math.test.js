import MathChar from '../math';

test('Attack', () => {
  const char = new MathChar('Char1', 100, false, 3);
  expect(char.attack).toBe(80);
});

test('Stoned attack', () => {
  const char = new MathChar('Char2', 100, true, 2);
  expect(char.attack).toBe(86);
});

test('Negative attack', () => {
  const char = new MathChar('Char3', 5, true, 5);
  expect(char.attack).toBe(0);
});