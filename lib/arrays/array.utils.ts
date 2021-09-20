/**
 * 
 * @description returns the sum of all digits in an array of numbers
 */
export const sumArr = (arr:number[]):number => {
  return arr.reduce((a, b) => a + b, 0);
};
/**
 * @description returns the larger of two arrays, if same length returns first
 * array
 */
export const getLargerArray = (arr1:any[], arr2:any[]):any[] => {
  return arr2.length > arr1.length ? arr2 : arr1;
};

/**
 * @description returns two input arrays by length, returning an array with the 
 * first member being the longer array, and the second member being the shorter array
 */
export const getLongerShorter = (arr1:any[], arr2:any[]):any[][] => {
  const shorter = arr2.length <= arr1.length ? arr2 : arr1;
  const longer = arr2.length > arr1.length ? arr2 : arr1;
  return [longer, shorter];
};

/**
 * @description determines if two arrays have strict equality between every member
 */
export const isArrayEqual = (a:any[], b:any[]):boolean => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};

/**
 * @description returns true if the first parameter is a contiguous subarray of the second parameter
 * will return false if subarray is longer than main array
 */
export const isSubArray=(sub:any[], main:any[]):boolean => {
  if(sub.length > main.length) return false;

  return sub.every(
    (
      (i) => (v) =>
        (i = main.indexOf(v, i) + 1)
    )(0)
  );
}
