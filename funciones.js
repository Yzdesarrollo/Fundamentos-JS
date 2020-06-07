/**FUNCIONES Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo:*/

var nombreDeLaVariable = document.querySelector('h1');

nombreDeLaVariable.innerHTML = 'Prueba';

/** Estas funciones están integradas en el navegador para poder utilizarlas en cualquier momento.

Si ves algo que parece un nombre de variable, pero tiene paréntesis — () — al final, probablemente es una función. Las funciones con frecuencia toman arguments — pedazos de datos que necesitan para hacer su trabajo. Estos se colocan dentro de los paréntesis, y se separan con comas si hay más de uno. 

Por ejemplo, la función alert() hace aparecer una ventana pop-up dentro de la ventana del navegador, pero nosotros necesitamos asignarle una cadena como un argumento para decirle qué mensaje se debe escribir en la ventana pop-up.
*/

alert('Hola!');

/** Las buenas noticias son que podemos definir nuestras propias funciones — en el siguiente ejemplo escribimos una función simple que toma dos números como argumentos y los multiplica entre si: */

function multiplicar(num1,num2) {
    var resultado = num1 * num2;
    return resultado;
  }

alert(multiplicar(0.5,3));

/** Nota: La sentencia return le dice al navegador que devuelva la variable resultado fuera de la función, para que esté disponible para su uso. Esto es necesario porque las variables definidas dentro de funciones, sólo están disponibles dentro de esas funciones. Esto se conoce como "alcance de la Variable". scoping (lee más sobre variable scoping aquí.)*/

  

