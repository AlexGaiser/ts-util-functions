import {
  getDigitAtPos,
  getDigitCount,
  floorToPowerOfTen,
} from '../lib/math.utils';

describe('get digit count', () => {
  test('should return 1', () => {
    expect(getDigitCount(5)).toBe(1);
  });
  test('should return 2', () => {
    expect(getDigitCount(23)).toBe(2);
  });
  test('should return 9', () => {
    expect(getDigitCount(987654321)).toBe(9);
  });
  test('should return 9 from negative', () => {
    expect(getDigitCount(-987654321)).toBe(9);
  });

  test('should return 1 with input 0', () => {
    expect(getDigitCount(0)).toBe(1);
  });
});

describe('get digit at position', () => {
  test('should return 1', () => {
    expect(getDigitAtPos(5, 0)).toBe(5);
  });
  test('should return 2', () => {
    expect(getDigitAtPos(23, 1)).toBe(2);
  });
  test('should return 9', () => {
    expect(getDigitAtPos(987654321, 4)).toBe(5);
  });
  test('should return 9 when negative', () => {
    expect(getDigitAtPos(-987654321, 4)).toBe(5);
  });

  test('should return 1 when 0', () => {
    expect(getDigitAtPos(0, 0)).toBe(0);
  });
});

describe('test floorToPowerOfTen', () => {
  test('should return 100', () => {
    expect(floorToPowerOfTen(222)).toBe(100);
  });
  test('should return 1000', () => {
    expect(floorToPowerOfTen(3333)).toBe(1000);
  });
  test('should return 1000 when negative', () => {
    expect(floorToPowerOfTen(-3333)).toBe(1000);
  });
  test('should return 0', () => {
    expect(floorToPowerOfTen(0)).toBe(0);
  });
});
