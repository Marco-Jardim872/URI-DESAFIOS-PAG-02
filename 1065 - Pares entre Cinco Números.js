var input = require('fs').readFileSync('/dev/stdin', 'utf8');
 
var dados = input.split('\n');

let val1 = parseInt(dados.shift());
let val2 = parseInt(dados.shift());
let val3 = parseInt(dados.shift());
let val4 = parseInt(dados.shift());
let val5 = parseInt(dados.shift());
let arr=[];
let pares=0;

arr.push(val1,val2,val3,val4,val5);

for (let i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        
        pares++;
    }
}

console.log(pares + " valores pares");