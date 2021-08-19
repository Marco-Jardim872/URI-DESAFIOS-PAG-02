var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');


let arr1 = [];
let arr2 = [];
let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
let z = parseInt(lines.shift());

arr1.push(x, y, z);
arr2.push(x, y, z);

arr1.sort((a,b)=>a-b);
for (let elem of arr1){
    console.log(elem);
}
console.log("");
for (let num of arr2){
    console.log(num);
}