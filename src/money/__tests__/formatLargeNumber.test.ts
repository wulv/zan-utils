import formatLargeNumber from '../formatLargeNumber';

describe('money:formatLargeNumber', () => {
  test('normal number', () => {
    expect(formatLargeNumber(1000000)).toBe('1,000,000');
  });

  test('zero number', () => {
    expect(formatLargeNumber(0)).toBe('0');
  });

  test('negative number', () => {
    expect(formatLargeNumber(-1000000)).toBe('-1,000,000');
  });
});
