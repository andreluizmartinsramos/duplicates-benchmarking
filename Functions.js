
class Functions {
  /**
   * Generate Array according rules:
   * - Size items must be n+1
   * - At least one duplicated (randomized)
   * - Randon range between 1 until n
   * @param {Number} n - Default 1.000.000
   * @returns {(Array|Boolean)} Randon array whereas size = n, otherwise returns false.
   */
  generateArr(n = 1000000) {
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
   * @returns {(Array|false)} Unique list of duplicated values or false
   */
  getAllDuplicatedByPrevNext(arr) {
      if(Array.isArray(arr)) {
        const arrNextPrev = arr.slice().sort((a, b) => a - b);

        let len = arrNextPrev.length,
            arrDuplicates = new Set();

        for(let i = 1; i <= len; i++) {

            if(Math.sign(parseInt(arrNextPrev[i-1])) !== 1) { return false; }

            if(arrNextPrev[i-1] === arrNextPrev[i]) {
                arrDuplicates.add(arrNextPrev[i]);
            }
        }
        
        return (arrDuplicates.size > 0) ? Array.from(arrDuplicates) : false;
      }

      return false;
  }  

  /**
   * Get All duplicated values of an array
   * Strategy: Object Interpolation > Array Filter
   * @param {Array} arr 
   * @returns {(Array|false)} Unique list of duplicated values or false 
   */
  getAllDuplicatedByObject(arr) {
    
    if(Array.isArray(arr)) {
      let objDuplicates = {}

      for(let i of arr) {
        
        if(Math.sign(parseInt(i)) !== 1) { return false; }
        
        let value = (objDuplicates[i] >= 1) ? (objDuplicates[i]+1) : 1;
        
        objDuplicates[i] = value;
      }

      const resultArr = Object.keys(objDuplicates).filter(e => objDuplicates[e] > 1);

      return (resultArr.length > 0) ? resultArr.map(e => parseInt(e)) : false;
    }
    return false;
  }  

  /**
   * Get All duplicated values of an array
   * Strategy: Array Sorted > Values Uniques > Comparison between themselves 
   * @param {Array} arr 
   * @returns {Array} Unique list of duplicated values
   */
  getAllDuplicatedByIndexOf(arr) {
    if(Array.isArray(arr)) {
      const arrIndexOf = arr.slice().sort((a, b) => a - b);

      let len = arrIndexOf.length, 
                arrUnique = [],
                arrDuplicates = new Set();

      for(let i = 0; i < len; i++) {
        let currentValue = arrIndexOf[i];

        if(Math.sign(parseInt(currentValue)) !== 1) { return false; }
        
        if(arrUnique.indexOf(currentValue) === -1) {
          arrUnique.push(currentValue)
        } else {
          arrDuplicates.add(currentValue)
        }
      }
      return (arrDuplicates.size > 0) ? Array.from(arrDuplicates) : false;
    }
    return false
  }  
}

export default Functions