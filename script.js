let numCartas;
let contador = 0;
let textinho;
let textao = [];
let contClick = 0;
let carta1;
let carta2;
let cartaPai;
let contSeg = 0;
let contMin = 0;
let reiniciar;
let reboot;

let arrayPapagaios =[
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot", 
    "metalparrot",
    "revertitparrot",
    "tripletsparrot", 
    "unicornparrot"];

//*****************PERGUNTA QUANTAS CARTAS NO JOGO + CHECAR SE É PAR E ENTRE 4 E 14*******//

function go(){
    numCartas = parseInt(prompt("Com quantas cartas quer jogar? Escolha um número par entre 4 e 14"));
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
go();


//*********************************** CRONOMETRO ***************************************//
let cronometro = document.querySelector(".cronometro");

//**********************começa cronometro

function myTimer() {
    contSeg++;

    if (contSeg > 59) {
        contSeg = 0
        contMin = contMin +1;
    }
    cronometro.innerHTML = `${contMin} : ${contSeg}`;
}
let myInterval = setInterval(myTimer, 1000);

//************************para cronometro

function pararCronometro() {
    clearInterval(myInterval);
}

//***********************DISTRIBUI O NUMERO DE CARTAS INFORMADO *************************//

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
//***************************** VIRAR e COMPARAR AS CARTAS *******************************//

function virar(elemento) {

    contClick++;

    let parrot = elemento.querySelector(".parrotFrente");
    let parrotinho = elemento.querySelector(".parrotVerso")

    parrot.classList.toggle("invisivel")
    parrotinho.classList.toggle("invisivel")
    
    let ePar = (contClick % 2) == 0;
    let eImpar = (contClick % 2) == 1;
    
    if (eImpar) {
        carta1 = parrotinho.children[0].src;
        cartaPai = parrotinho;
        cartaMae = parrot;
    } if (ePar) {
        carta2 = parrotinho.children[0].src;
    }
    
    if (ePar) {
        if (carta1 !== carta2){
            setTimeout(desvirar, 1000, carta1);
            function desvirar(x){
                cartaMae.classList.toggle("invisivel");
                cartaPai.classList.toggle("invisivel");
                parrot.classList.toggle("invisivel");
                parrotinho.classList.toggle("invisivel");
            }
        }
    }
    ganhei();
}

//********************************** FINALIZA O JOGO ************************************//

function ganhei() {
    let cartonhas = document.querySelector(".cartas");

    if (cartonhas.querySelectorAll(".parrotFrente.invisivel").length == numCartas) {
        if(contMin >= 1) {
            setTimeout(alert, 1500, `Você ganhou com ${contClick} jogadas em ${contMin} minutos e ${contSeg} segundos!`);
        } else {
            setTimeout(alert, 1500, `Você ganhou com ${contClick} jogadas em ${contSeg} segundos!`);
        }
    
        pararCronometro()
        reboot = setTimeout(reiniciarJogo, 2000);
    }
}

//********************************** REINICIAR O JOGO ***********************************//

function reiniciarJogo() {
    reiniciar = prompt("Você quer que o jogo reinicie?");
    if (reiniciar == "não") {
        
    } if (reiniciar == "sim") {
        window.location.reload();  
    }
}