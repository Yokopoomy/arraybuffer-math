import MathChar from '../math';

test('set attack', () => {
  const char = new MathChar('Char1', 0, false, 3);
  char.attack = 100;
  expect(char.attack).toBe(80);
});

test('get attack', () => {
  const char = new MathChar('Char2', 100, false, 3);
  expect(char.attack).toBe(80);
});

test('Set stoned attack', () => {
  const char = new MathChar('Char3', 100, false, 2);
  char.stoned = true;
  expect(char.attack).toBe(86);
});

test('get stoned attack', () => {
  const char = new MathChar('Char4', 100, false, 2);
  char.stoned = true;
  expect(char.stoned).toBe(true);
});

test('Negative attack', () => {
  const char = new MathChar('Char5', 5, true, 5);
  expect(char.attack).toBe(0);
});
