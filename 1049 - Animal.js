var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let pal1 = dados.shift();
let pal2 = dados.shift();
let pal3 = dados.shift();

if(pal1.includes("invertebrado")){
    if(pal2.includes("inseto")){
        if(pal3.includes("hematofago")){
            console.log("pulga");
        }else if(pal3.includes("herbivoro")){
            console.log("lagarta");
        }
    }else if(pal2.includes("anelideo")){
        if(pal3.includes("hematofago")){
            console.log("sanguessuga");
        }else if(pal3.includes("onivoro")){
            console.log("minhoca");
        }
    }
}else if(pal1.includes("vertebrado")){
    if(pal2.includes("ave")){
        if(pal3.includes("carnivoro")){
            console.log("aguia");
        }else if(pal3.includes("onivoro")){
            console.log("pomba");
        }
    }else if(pal2.includes("mamifero")){
        if(pal3.includes("onivoro")){
            console.log("homem");
        }else if(pal3.includes("herbivoro")){
            console.log("vaca");
        }
    }
}