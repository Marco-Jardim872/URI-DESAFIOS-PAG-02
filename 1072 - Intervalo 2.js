var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let test = parseInt(dados.shift());
let den = 0;
let fora = 0;

dados.forEach(calc);
function calc(value) {
    if((value>=10) && (value<=20)){
        den++;
    }
   
}
console.log(den + " in");
console.log((test-den) + " out");