var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let val1 = parseInt(dados.shift());
let count = 0;

while(count < 12){
    if(val1 % 2 !==0){
        console.log(val1);
      
    }
    val1++;
    count++;
}

