

let numCartas;
let contador = 0;


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


//******************************* VIRAR e COMPARAR AS CARTAS *********************************//

let contClick = 0;
let carta1;
let carta2;
let cartaPai;

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
        if (carta1 === carta2){
            
        } else {
            setTimeout(desvirar, 1000, carta1);
            function desvirar(x){
                cartaMae.classList.toggle("invisivel");
                cartaPai.classList.toggle("invisivel");
                parrot.classList.toggle("invisivel");
                parrotinho.classList.toggle("invisivel");
                console.log(parrot);
                console.log(parrotinho);
            }
        }
    }
    ganhei();
}    


function ganhei() {
    let cartonhas = document.querySelector(".cartas");

        if (cartonhas.querySelectorAll(".parrotFrente.invisivel").length == numCartas) {
            setTimeout(alert, 1500, `Você ganhou em ${contClick} jogadas!`);
        }
}


    /*    for(let index = 0; index < ; index++){
    if (parrot.classList.contains("invisivel"document.querySelector(".cartas").querySelectorAll(".invisivel")) && parrotinho.classList.contains("invisivel")) {
        parrot.classList.toggle("invisivel");
        parrotinho.classList.toggle("invisivel");
    } else {
        parrot.classList.toggle("invisivel")
        parrotinho.classList.toggle("invisivel")
    }*/
    

    /*let parrotinho = elemento.querySelector(".parrotVerso")
    if (parrotinho.classList.contains("invisivel")) {
        parrotinho.classList.toggle("invisivel");
    } else {
        parrotinho.classList.toggle("invisivel")
    }*/


/*function comparação() {
    clicar a carta 1 e marcar que elemento foi
    let carta1[0]; - > apontar o 1 elemento virado textao[i]
    let carta2[1]; - > apontar o segundo elemento virado textao[i]

 // if (carta1 === carta2)
    //manter virado
    else
    desvirar as 2

    //segurar as 2 cartas com setTimeout(ou setinterval?) e desvirar depois de 1.5s
    //para desvirar as cartas, usar clearInterval?
}*/




//provavelmente para contar o tempo de jogo, é com setinterval 1s  e parar com clearinterval()