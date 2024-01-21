<<<<<<< HEAD

//forma normal
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Escoge un numero del 1 al 10';

let numeroSecret = 0 ;


let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return; //buenas practica
}

function verificarIntento(){
    let numeroDeUusuario = parseInt(document.getElementById('valorUsuario').value); //es la etiqueta de html
    /*console.log(typeof(numeroDeUusuario)); //tipo de dato
    console.log(numeroDeUusuario);
    console.log(numeroSecret);
    console.log(typeof(numeroSecret)); //tipo de dato
    console.log(numeroSecret === numeroDeUusuario); /// igual en valor y tipo el === */
   // alert('Click desde la funcion');
   //console.log(intentos);
   if (numeroDeUusuario === numeroSecret){
    asignarTextoElemento('p',`Acertaste manito en : ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); // operador ternario
    document.getElementById('reiniciar').removeAttribute('disabled');
   
} else{
        //el usuario n oacerto    
        if (numeroDeUusuario > numeroSecret){
            asignarTextoElemento('p','Es menos manito');
        } else{
            asignarTextoElemento('p','Es mas manito');
        }
        intentos++;
        limpiarCaja();
   }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value ='';
    //forma reducidAA
    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
    return Math.floor(Math.random()*10)+1;
  // no necesitamos crear una variable
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secret');
    asignarTextoElemento('p','Escoge un numero del 1 al 10');
    numeroSecret = generarNumSecreto();
    console.log(numeroSecret);
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();

//forma profesional
//asignarTextoElemento('h1','Juego del numero secret');
//asignarTextoElemento('p','Escoge un numero del 1 al 10');
=======
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Numero secreto';
>>>>>>> 97bf20f8c7e8370ed7f19c2406f4fda4209d2aac
