var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let renda = parseFloat(dados.shift());
let ir=0;

if(renda <= 2000){
    console.log('Isento');
}else if((renda > 2000) && (renda <= 3000)){
    ir = ((renda-2000)*0.08).toFixed(2);
    console.log("R$ " + ir);
}else if((renda > 3000) && (renda <= 4500)){
    ir = (((renda-3000) * 0.18) + 80).toFixed(2);
    console.log("R$ " + ir);
}else if(renda > 4500){
    ir = (((renda-4500) * 0.28) +350).toFixed(2);
    console.log("R$ " + ir);
}
