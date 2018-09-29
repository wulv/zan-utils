import formatLargeNumber from '../formatLargeNumber';

describe('money', () => {
  test('formatLargeNumber', () => {
    expect(formatLargeNumber(1000000)).toBe('1,000,000');
  });
});
