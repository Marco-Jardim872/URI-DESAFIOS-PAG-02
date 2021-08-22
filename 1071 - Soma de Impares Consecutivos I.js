var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let val1 = parseInt(dados.shift());
let val2 = parseInt(dados.shift());

let arr=[];
arr.push(val1,val2);
arr.sort((a,b)=>a-b);

let ct = arr[0]+1;
let soma=0;

while(ct < arr[1]){
    if(ct % 2 !==0){
       soma += ct;
    }
    ct++;
}

console.log(soma);