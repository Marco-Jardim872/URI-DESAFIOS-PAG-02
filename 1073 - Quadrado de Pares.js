var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

for (let i = 1; i <= num; i++) {
    if( i % 2 !==0)continue;
    let result = Math.trunc(Math.pow(i,2));
    console.log(i + "^2 = " + result);
}