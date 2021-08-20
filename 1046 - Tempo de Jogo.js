var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

if(x<y){
    console.log('O JOGO DUROU ' + (y - x) + ' HORA(S)');
}else if(x>y){
    console.log('O JOGO DUROU ' + ((24 - x)+(y)) + ' HORA(S)');
}else if(x==y){
    console.log('O JOGO DUROU 24 HORA(S)');
}
