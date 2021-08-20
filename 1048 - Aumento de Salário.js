var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let sal = parseFloat(lines.shift());
let per = 0;
let reaj = 0;

if(sal>0 && sal<=400){
    per = 0.15;
    reaj = (sal*per);
}else if(sal>400 && sal<=800){
    per = 0.12;
    reaj = (sal*per);
}else if(sal>800 && sal <=1200){
    per = 0.10;
    reaj = (sal*per);
}else if(sal>1200 && sal <=2000){
    per = 0.07;
    reaj = (sal*per);
}else if(sal>2000){
    per = 0.04;
    reaj = (sal*per);
}
console.log("Novo salario: " + (sal+reaj).toFixed(2));
console.log("Reajuste ganho: " + reaj.toFixed(2));
console.log("Em percentual: " + (per*100).toFixed() + " %");