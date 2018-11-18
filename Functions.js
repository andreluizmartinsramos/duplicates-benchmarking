/**
 * Generate Array according rules:
 * - Size items must be n+1
 * - At least one duplicated (randomized)
 * - Randon range between 1 until n
 * @param {Number} n - Default 1.000.000
 * @returns {(Array|Boolean)} Randon array whereas size = n, otherwise returns false.
 */
function generateArr(n = 1000000) {
    let arr = [];

    if (typeof n == "number" && n > 0) {
      for (let i = 0; i <= n; i++) {
        if (i === n) {
          arr.push(arr[Math.floor( Math.random() * arr.length)]);
        } else {
          arr.push(Math.floor(Math.random() * n) + 1);
        }
      }
      return arr;
    }
    return false;
  }

/**
 * Get All duplicated values of an array
 * Strategy: (Prev-Next) Sort -> Prev/Current Compare -> Set (non duplicated results)
 * @param {Array} arr 
 * @returns {Set} Unique list of duplicated values
 */
function getAllDuplicatedByPrevNext(arr) {
    const arrNextPrev = arr.slice().sort((a, b) => a - b);

    let len = arrNextPrev.length,
        arrDuplicates = new Set();

    for(let i = 1; i <= len; i++) {
        if(arrNextPrev[i-1] === arrNextPrev[i]) {
            arrDuplicates.add(arrNextPrev[i]);
        }
    }
    return arrDuplicates;
}  

/**
 * Get All duplicated values of an array
 * Strategy: Object Interpolation > Array Filter
 * @param {Array} arr 
 * @returns {Arr} Unique list of duplicated values
 */
function getAllDuplicatedByObject(arr) {
  objDuplicates = {}

  for(let i of arr) {
    let value = (objDuplicates[i] >= 1) ? (objDuplicates[i]+1) : 1;
    
    objDuplicates[i] = value;
  }

  return Object.keys(objDuplicates).filter(e => objDuplicates[e] > 1)
}  

/**
 * Get All duplicated values of an array
 * Strategy: Array Sorted > Values Uniques > Comparison between themselves 
 * @param {Array} arr 
 * @returns {Arr} Unique list of duplicated values
 */
function getAllDuplicatedByIndexOf(arr) {
  const arrIndexOf = arr.slice().sort((a, b) => a - b);

  let len = arrIndexOf.length, 
            arrUnique = [],
            arrDuplicates = new Set();

  for(let i = 0; i < len; i++) {
    let currentValue = arrIndexOf[i];

    if(arrUnique.indexOf(currentValue) === -1) {
      arrUnique.push(currentValue)
    } else {
      arrDuplicates.add(currentValue)
    }
  }
  return arrDuplicates;
}  

module.exports = { generateArr, getAllDuplicatedByPrevNext }