const Functions = require('../Functions');

const n = 10 
const arrOrigin = Functions.generateArr(n);
const arrSorted = arrOrigin.slice().sort((a,b) => a-b);

console.log(arrOrigin)
console.log(arrSorted)

test('The size must be N+1', () => {
  expect(arrOrigin.length).toBe((n+1));
});

test('The smaller number must be greater than 0', () => {
  expect(arrSorted[0]).toBeGreaterThan(0);
});

test('The higher number must be less than N', () => {
  expect(arrSorted[n]).toBeLessThanOrEqual(n);
});


test('At least one number duplicated into the array', () => {
  /** 
   * Following the generate logic, the last index always will be duplicated, than test the last 
   * index if contains on the rest of array.
   * */ 
  expect(arrOrigin.slice(0,-1)).toContain(arrOrigin[arrOrigin.length-1]);
});

