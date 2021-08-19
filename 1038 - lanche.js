var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let cod = parseInt(lines.shift());
let qt = parseInt(lines.shift());
let total;


switch(cod){
    case 1:
        total = parseFloat(qt * 4.00).toFixed(2);
        break;
    case 2:
        total = parseFloat(qt * 4.50).toFixed(2);
        break;
    case 3:
        total = parseFloat(qt * 5.00).toFixed(2);
        break;
    case 4:
        total = parseFloat(qt * 2.00).toFixed(2);
        break;
    case 5:
        total = parseFloat(qt * 1.50).toFixed(2);
        break;
}
console.log("Total: R$ " + total);
