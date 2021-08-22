var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let val1 = parseFloat(dados.shift());
let val2 = parseFloat(dados.shift());
let val3 = parseFloat(dados.shift());
let val4 = parseFloat(dados.shift());
let val5 = parseFloat(dados.shift());
let val6 = parseFloat(dados.shift());

let arr=[];
let pos=0;
let soma=0;

arr.push(val1,val2,val3,val4,val5,val6);

for (let i = 0; i < arr.length; i++){
    if(arr[i]>0){
        soma += arr[i];
        pos++;
    }
}

console.log(pos + " valores positivos");
console.log(parseFloat(soma/pos).toFixed(1));