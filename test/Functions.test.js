import Functions from '../Functions.js'

const f = new Functions();

const n = 10 
const arrOrigin = f.generateArr(n);
const arrSorted = arrOrigin.slice().sort((a,b) => a-b);

const case_1 =  [ 10, 2, 5, 6, 1, 4, 10, 8, 1, 10, 1 ] //[1, 10,]
const case_2 =  [ 2, 2, 2, 2 ] //[2]
const case_3 =  [ 2, 2, 2, null ] //false
const case_4 =  [ 1,2,'andre',3 ] //false
const case_5 =  [ -1,2,3,3 ] //false
const case_6 =  [ 1,2,3,5,6 ] //false
const case_7 =  5 //false


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

/**
 *  GET ALL DUPLICATES TESTS
 */
test('Get All Duplicates: ByObject Strategy', () => {
  expect(f.getAllDuplicatedByObject(case_1)).toEqual([1, 10]);
  expect(f.getAllDuplicatedByObject(case_2)).toEqual([2]);
  expect(f.getAllDuplicatedByObject(case_3)).toEqual(false);
  expect(f.getAllDuplicatedByObject(case_4)).toEqual(false);
  expect(f.getAllDuplicatedByObject(case_5)).toEqual(false);
  expect(f.getAllDuplicatedByObject(case_6)).toEqual(false);
  expect(f.getAllDuplicatedByObject(case_7)).toEqual(false);  
});

test('Get All Duplicates: ByPrevNext Strategy', () => {
  expect(f.getAllDuplicatedByPrevNext(case_1)).toEqual([1, 10]);
  expect(f.getAllDuplicatedByPrevNext(case_2)).toEqual([2]);
  expect(f.getAllDuplicatedByPrevNext(case_3)).toEqual(false);
  expect(f.getAllDuplicatedByPrevNext(case_4)).toEqual(false);
  expect(f.getAllDuplicatedByPrevNext(case_5)).toEqual(false);
  expect(f.getAllDuplicatedByPrevNext(case_6)).toEqual(false);
  expect(f.getAllDuplicatedByPrevNext(case_7)).toEqual(false);  
});

test('Get All Duplicates: ByIndexOf Strategy', () => {
  expect(f.getAllDuplicatedByIndexOf(case_1)).toEqual([1, 10]);
  expect(f.getAllDuplicatedByIndexOf(case_2)).toEqual([2]);
  expect(f.getAllDuplicatedByIndexOf(case_3)).toEqual(false);
  expect(f.getAllDuplicatedByIndexOf(case_4)).toEqual(false);
  expect(f.getAllDuplicatedByIndexOf(case_5)).toEqual(false);
  expect(f.getAllDuplicatedByIndexOf(case_6)).toEqual(false);
  expect(f.getAllDuplicatedByIndexOf(case_7)).toEqual(false);  
});


