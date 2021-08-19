var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let arr = [];
let arr2 = [];

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());
let z = parseFloat(lines.shift());

arr.push(x, y, z);
arr2.push(x, y, z);

arr.sort((a,b)=>a-b);

if( (arr[2] > (arr[1] - arr[0])) && (arr[2] < (arr[1] + arr[0])) ) {
    let per = (arr[0] + arr[1] + arr[2]).toFixed(1);
    console.log("Perimetro = " + per);
}else{
    let ar = (((arr2[0] + arr2[1]) * arr2[2])/2).toFixed(1);
    console.log("Area = " + ar);
}