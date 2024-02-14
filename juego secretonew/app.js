const numero = document.getElementById('numero');
const resultado=document.getElementById('resultado');
const numeroint=document.getElementById('numerointentos')
const imagen =  document.getElementById('imagen');

let numeroSecreto;
let numeroMaximo=10;
let numeroIntentos=2;
let numerorandom;


function nuevoJuego(){
    numeroIntentos=2;
    generarnumerosecreto();
    console.log(numeroSecreto)
    numeroint.innerHTML='numero intentos es: '+ numeroIntentos;
    let numeroimg=numeroRandom();
    var fuente='img'+numeroimg+'.jpg';
    imagen.setAttribute('src',fuente)
}

function intentar(){
   
   if (validar(numero.value, numeroMaximo,'numero Maximo')&&validar(0,numeroIntentos,'numero de Intentos')){
    numeroIntentos=numeroIntentos-1
    numeroint.innerHTML='numero intentos es: '+ numeroIntentos;

    console.log("ingresando "+numeroIntentos)
    console.log(numero.value)

    console.log(numeroSecreto)
    if(numeroSecreto==numero.value){
        resultado.innerHTML="GANASTE!!"
    }else{
        if(numero.value>=numeroSecreto){
            resultado.innerHTML="el numero es menor"
        }else{
            resultado.innerHTML="el numero es mayor"
        }
    }
   }
    
}
function validar(numero1,numero2,texto){
    if(numero1>=numero2){
        alert('estas sobrepasando el: '+texto);
        return false;
    }else{
        return true;
    }
}
function generarnumerosecreto(){
    numeroSecreto=Math.floor(Math.random()*numeroMaximo)+1
    return numeroSecreto
}
function numeroRandom(){
    return numerorandom=Math.floor(Math.random()*3)+1
}