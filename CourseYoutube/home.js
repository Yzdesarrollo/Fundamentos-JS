// document.getElementById('txt').innerHTML="Hola mundo";

//var edad = prompt('What is your age');
//document.getElementById('txt').innerHTML=edad;

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

function greeting() {
    var name = prompt('What is your name?');
    var result = 'Hola ' + name;
    console.log(result);
}

//greeting();

// How do arguments work in functions?

function sumNumbers (num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);


// Data Types
let yourAge = 21;                                 // Number
let yourName = 'Bob';                             // String
let person = {first: 'Jane', last: 'Martinez'};   // Object
let truth = false;                                // Boolean
let groceries = ['apple', 'banana', 'oranges'];   // Array
let random;                                      // undefined
let nothing = null;                             // value null

// Strings (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';              // new line

console.log(fruit.length);                    // funcion que dice la cantidad de caracteres.
console.log(fruit.indexOf('nan'));  
console.log(fruit.slice(0, 5));              // funcion que resta carateres de derecha izquierda y viceversa
console.log(fruit.replace('ban', '123')); // funcion que reemplaza los caracteres que se mencionan.
console.log(fruit.toUpperCase(fruit)); //  
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(0)); // Funcion que trae un solo caracter. es igual a escribir console.log(fruit[0]);

console.log(fruit.split('')); 

// Arrays


