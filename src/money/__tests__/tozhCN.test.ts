import tozhCN from '../tozhCN';

describe('money:tozhCN', () => {
  test('100', () => {
    expect(tozhCN(100)).toBe('壹佰元整');
  });

  test('string error', () => {
    const data = 'exception';
    expect(() => tozhCN(data)).toThrowError();
  });

  test('object error', () => {
    const data = { a: 1 };
    expect(() => tozhCN(data as any)).toThrowError();
  });
});
