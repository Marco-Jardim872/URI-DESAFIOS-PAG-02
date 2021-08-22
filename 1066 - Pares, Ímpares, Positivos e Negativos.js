var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let val1 = parseInt(dados.shift());
let val2 = parseInt(dados.shift());
let val3 = parseInt(dados.shift());
let val4 = parseInt(dados.shift());
let val5 = parseInt(dados.shift());
let arr=[];
let pares=0;
let pos=0;
let neg=0;

arr.push(val1,val2,val3,val4,val5);

arr.forEach(calc);
function calc(value){
    if(value % 2 ===0){
        pares++;
    }
    if(value > 0){
        pos++;
    }
    if(value < 0){
        neg++;
    }
}

console.log(pares + " valor(es) par(es)");
console.log((5-pares) + " valor(es) impar(es)");
console.log(pos + " valor(es) positivo(s)");
console.log(neg + " valor(es) negativo(s)");