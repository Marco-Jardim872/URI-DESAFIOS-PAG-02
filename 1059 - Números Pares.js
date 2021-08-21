var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num=1;
while(num<=100){
    if(num % 2 ===0){
        console.log(num);
    }
    num++;
}

