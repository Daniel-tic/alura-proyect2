let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escoge un numero del 1 al 10';

function intentoDeUsuario(){
    console.log('El botón fue clicado');
    alert('Click desde la funcion');
}

function amoJS(){
    alert('Yo amo JS');
}

function mostarAlerta(){
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
   a
   
}

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}


//desafio
function saludo() {
    console.log('Hola mundooo');
    return;
}

function mostrarNombre(nombre) {
    let mostrarNomb = nombre;
    console.log(`hola , ${mostrarNomb}`);
    return;
    
}

function doblarNum(numero) {
    let mostrarNum = parseInt(numero)*2;
    console.log(mostrarNum);
    return;
    
}

function promNum(a, b, c) {
    let prom = (parseInt(a) + parseInt(b) + parseInt(c))/3;
    console.log(prom);
    return;
}

function numMayor(a,b){
    let encontrMayor = (a > b ? a : b);
    console.log(encontrMayor);
    return;
}

function multiNum(numero) {
    let mostrarNum = parseInt(numero)*parseInt(numero);
    console.log(mostrarNum);
    return;
    
}


saludo();
mostrarNombre('daniel');
doblarNum('3');
promNum('3', '6', '9');
numMayor('20', '10');
multiNum('10');