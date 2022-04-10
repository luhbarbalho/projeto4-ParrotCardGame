

let numCartas;
let contador = 0;


//*****************PERGUNTA QUANTAS CARTAS NO JOGO + CHECAR SE É PAR E ENTRE 4 E 14*******//

function go(){
    numCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
    let intervalo = ((numCartas >= 4) && (numCartas <= 14));

    while((numCartas%2) !== 0){

        numCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
        while((intervalo == false)){
            numCartas = parseInt(prompt("Com quantas cartas quer jogar?"));
            intervalo = ((numCartas >= 4) && (numCartas <= 14));
        }
    }
    distribuirCartas();
}


//***********************DISTRIBUI O NUMERO DE CARTAS INFORMADO *************************//

let arrayPapagaios =[
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot", 
    "metalparrot",
    "revertitparrot",
    "tripletsparrot", 
    "unicornparrot"];

    let textinho;
    let textao = [];

function distribuirCartas(quantCartas) {

    quantCartas = document.querySelector(".cartas");

    arrayPapagaios.sort(sorteador);

    function sorteador() { 
    return Math.random() - 0.5; 
    }

    let pares = numCartas/2;
    while(contador < pares){
        
        textinho = `<div class="cardzinho" onclick="virar(this)">
        <div class="parrotFrente">
            <img class="parrot" src="media/front.png"/>
        </div>
        <div class="parrotVerso invisivel">
            <img class="parrotinho" src="media/${arrayPapagaios[contador]}.gif">
        </div>
        </div>`;
        
        textao.push(textinho);
        textao.push(textinho);

        contador++;

    }

    textao.sort(embaralhar);

    function embaralhar() { 
    return Math.random() - 0.5; 
    }

    for (let i = 0; i < textao.length; i++){
        quantCartas.innerHTML += textao[i];
    }
}


//*********************************VIRAR AS CARTAS***********************************//


function virar(elemento) {

    
    let parrot = elemento.querySelector(".parrotFrente");
    let parrotinho = elemento.querySelector(".parrotVerso")
    if (parrot.classList.contains("invisivel") && parrotinho.classList.contains("invisivel")) {
        parrot.classList.toggle("invisivel");
        parrotinho.classList.toggle("invisivel");
    } else {
        parrot.classList.toggle("invisivel")
        parrotinho.classList.toggle("invisivel")
    }

    /*let parrotinho = elemento.querySelector(".parrotVerso")
    if (parrotinho.classList.contains("invisivel")) {
        parrotinho.classList.toggle("invisivel");
    } else {
        parrotinho.classList.toggle("invisivel")
    }*/
}

function comparação() {
    let carta1;
    let carta2;
    textinho[i] === textinho[i]
}
