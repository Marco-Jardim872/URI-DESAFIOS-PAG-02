var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());
let z = parseFloat(lines.shift());

let arr=[];
arr.push(x,y,z);
arr.sort((a,b)=>b-a);
let A = arr[0];
let B = arr[1];
let C = arr[2];

let QA = A*A;
let QB = B*B;
let QC = C*C;

if(((A) >= (B + C))){
    console.log("NAO FORMA TRIANGULO");
}else if( (QA == (QB + QC)) ){
    console.log("TRIANGULO RETANGULO");
    if(((A == B) || (B == C))){
        console.log("TRIANGULO ISOSCELES");
    }
}else if((QA > (QB + QC))){
    console.log("TRIANGULO OBTUSANGULO");
    if(((A == B) || (B == C))){
        console.log("TRIANGULO ISOSCELES");
    }
}else if((QA < (QB + QC))){
    console.log("TRIANGULO ACUTANGULO");
    if(((A == B) && (B == C))){
        console.log("TRIANGULO EQUILATERO");
    }else if(((A == B) || (B == C))){
        console.log("TRIANGULO ISOSCELES");
    }
    
}