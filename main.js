import Functions from './Functions.js'

const f = new Functions();

console.time("generateArr");
const arrExample = f.generateArr(); //PUT HERE YOUR N (default = 1.000.000)
console.timeEnd("generateArr");
console.log(arrExample);

console.time("getAllDuplicatedByPrevNext");
const c0 = f.getAllDuplicatedByPrevNext(arrExample);
console.timeEnd("getAllDuplicatedByPrevNext");
console.log(c0);

console.time("getAllDuplicatedByObject");
const c1 = f.getAllDuplicatedByObject(arrExample);
console.timeEnd("getAllDuplicatedByObject");   
console.log(c1);

// console.time("getAllDuplicatedByIndexOf");
// const c2 = f.getAllDuplicatedByIndexOf(arrExample);  //(Crashing when 1.000.000 Numbers)
// console.timeEnd("getAllDuplicatedByIndexOf");   
// console.log(c2);    
