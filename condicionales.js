/**
 * CONDICIONALES 
 * Negación, distinto (no igual)	
En ocasiones utilizado con el operador de identidad, la negación es en JS el equivalente al operador lógico NOT — cambia true por false y viceversa.	!, !==	
La expresión básica es true, pero la comparación devuelve false porque lo hemos negado:

var miVariable = 3;
!miVariable === 3;

Aquí estamos comprobando "es miVariable NO igual a 3". Esto devuelve false, porque ES igual a 3.

var miVariable = 3;
miVariable !== 3; */

var helado = 'chocolate';
if (!helado === 'chocolate') {
  alert('¡Si, amo el helado de chocolate!');    
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');    
}

let perro = 'Kiara';
if (!perro === 'Kiara'){
    alert('Es mi perro');
} else {
    alert('No es mi perro');
}

/**La expresión dentro de if ( ... ) es el criterio — este usa al operador de identidad (descrito arriba) para comparar la variable helado con la cadena chocolate para ver si las dos son iguales. Si esta comparación devuelve true, el primer bloque de código se ejecuta. Si no, ese código se omite y se ejecuta el segundo bloque de código después de la declaración else. */