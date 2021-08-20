var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

if ((x % y === 0) || (y % x === 0)) {
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}
