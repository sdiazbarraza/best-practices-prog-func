
/*
Currying  

-Tiene como base los calculos lambda
- Se cumple el DRY (Don' repeat yourself).

Algunas ventajas :

-Podemos crear funciones nuevas simplemente pasando nuestras funciones de base con algunos parámetros.
-Podemos transformar cualquier función que trabaje con un solo elemento en una que trabaje con una lista envolviéndola en un map.
-Se pueden escribir pequeñas piezas de código que sean más fácil de reutilizar.
-Es fácil de razonar sobre ellas.
-Escribir funciones currificadas nos permitirá componer funciones.

src:https://yeisondaza.com/currying-en-javascript-funciones-con-superpoderes

Ejercicio :


Escribe la función primes tal que que reciba como parámetro un número n y retorne los n primeros números primos. Por ejemplo, dado n = 6 la función debe comportarse así:

primes(6)
=> [2, 3, 5, 7, 11, 13]*/
/*
--Funciones anonimas 

function primes( nPrimeros ){
let acumulador = [];
 for(let i = 1 ; i < +Infinity && acumulador.length<nPrimeros ;i++){
 		if(i == 1){
    	continue;
    }
    if(primo(i)){
 		   acumulador.push(i);
    }
 }
 console.log("acumulador",acumulador);
 
}
function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
primes(4);*/

/*
Funciones Curreadas 
Permiten DRY, Responsabilidad unica

*/
const operaciones = {

	obtenerNumeros : nPrimeros=>fn=>{
  
  	let acumulador = [];
    
     for(let i = 1 ; i < +Infinity && acumulador.length<nPrimeros ;i++){
        
        if(i == 1){
          continue;
        }
        
        if(fn(i)){
           acumulador.push(i);
        }
     }
     
     return acumulador;
  },
  
  primo:(numero)=>{
  
  	for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
  
  }
  
}

const obtenerNumeros = operaciones.obtenerNumeros(6);

const resultadoArray = obtenerNumeros(operaciones.primo);

console.log("resultado",resultadoArray);


