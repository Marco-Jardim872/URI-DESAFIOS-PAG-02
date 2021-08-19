
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
var exame = input.split('\n');



let N1 = parseFloat(lines.shift());
let N2 = parseFloat(lines.shift());
let N3 = parseFloat(lines.shift());
let N4 = parseFloat(lines.shift());

let Nd = parseFloat(exame.shift());
let Ne = parseFloat(exame.shift());
let media = (((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1))/10);

let mediaFinalExame = (Ne + media) / 2;


console.log("Media: " + media.toFixed(1));

if(media >= 7.0){
    console.log("Aluno aprovado.");
}else if(media < 5.0){
    console.log("Aluno reprovado.");
}else if(media >= 5.0 && media <= 6.9){
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + Ne.toFixed(1));
    if(mediaFinalExame >= 5.0){
        console.log("Aluno aprovado.");
        console.log("Media final: " + mediaFinalExame.toFixed(1));
    }
}