export const floorToPowerOfTen = (n: number): number => {
  const order = Math.floor(
    Math.log(Math.abs(n)) / Math.LN10 + 0.000000001,
  );
  return Math.pow(10, order);
};

export const getDigitCount = (num: number): number => {
  return num !== 0 ? Math.floor(Math.log10(Math.abs(num))) + 1 : 1;
};

export const getDigitAtPos = (num: number, index: number) => {
  return num !== 0
    ? Math.floor(Math.abs(num) / Math.pow(10, index)) % 10
    : 0;
};
const mathUtils = {
  floorToPowerOfTen,
  getDigitCount,
  getDigitAtPos,
};

export default mathUtils;
