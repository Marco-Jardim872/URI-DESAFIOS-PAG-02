var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let val1 = (dados.shift()).split(' '); 
let val2 = (dados.shift()).split(':');
let val3 = (dados.shift()).split(' ');
let val4 = (dados.shift()).split(':');

let dia = (val3[1]-val1[1])-1;
let tempoInicio = 86400 -((parseInt(val2[0])*3600)+(parseInt(val2[1])*60)+(parseInt(val2[2])));
let tempoFinal = ((parseInt(val4[0])*3600)+(parseInt(val4[1])*60)+(parseInt(val4[2])));
let tempoTotal = tempoInicio + tempoFinal;
if(tempoTotal>86400){
    tempoTotal = (tempoTotal-86400);
    dia +=1;
}
let horaTotal = Math.trunc(tempoTotal/3600);
let minTotal = Math.trunc((tempoTotal-(horaTotal*3600))/60);
let segTotal = tempoTotal - ((horaTotal*3600)+(minTotal*60));

console.log(dia + " dia(s)");
console.log(horaTotal + " hora(s)");
console.log(minTotal + " minuto(s)");
console.log(segTotal + " segundo(s)");