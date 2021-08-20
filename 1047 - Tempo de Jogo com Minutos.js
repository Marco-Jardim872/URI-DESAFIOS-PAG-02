var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let hI = parseInt(lines.shift());
let mI = parseInt(lines.shift());
let hF = parseInt(lines.shift());
let mF = parseInt(lines.shift());

let tempoHorInicial = (hI*60);
let tempoHorFinal = (hF*60);
let tF = tempoHorFinal + mF;
let tI = tempoHorInicial + mI;
let dM = tF - tI;
let virada = ((1440-tI)+tF);
let dHoras = Math.trunc(dM/60);
let dMin = Math.trunc(dM%60);

if(tF==tI){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
}else if(hF>hI && tF>tI){
    console.log('O JOGO DUROU ' + dHoras + ' HORA(S) E ' + dMin + ' MINUTO(S)');
}else if(hF==hI && tF>tI){
    console.log('O JOGO DUROU ' + 0 + ' HORA(S) E ' + (mF-mI) + ' MINUTO(S)');
}else if(virada>60 && tF<tI){
    console.log('O JOGO DUROU ' +  Math.trunc((virada)/60) + ' HORA(S) E ' + Math.trunc((virada)%60)  + ' MINUTO(S)');
}else if(virada<60 && tF<tI){
    console.log('O JOGO DUROU ' +  0 + ' HORA(S) E ' + ((60-mI)+mF)  + ' MINUTO(S)');
}