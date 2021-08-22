var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let val1 = parseInt(dados.shift());
let num=1;

while(num>=1 && num<=val1){
    if(num%2 !== 0){
        console.log(num);
    }
    num++;
}
