
/** 
 * 1. En index.html, agrega el siguiente código antes del elemento
 * 2. En main.js, agrega el siguiente código al final del archivo, exactamente como está escrito— Esto toma referencia a el nuevo botón que agregamos y al titulo, y los almacena en variables
 * 3. Ahora agregaremos la siguiente función para poner el saludo personalizado — esto no hará nada aún, pero arreglaremos esto en un momento Esta función contiene una función  prompt(), que crea un cuadro de diálogo como lo hace alert(); la diferencia es que prompt() pide al usuario un dato, y almacena este dato en una variable cuando el botón OK del cuadro de diálogo es presionado. En este caso, pediremos al usuario que ingrese su nombre. Luego, llamaremos la API localStorage, que nos permite almacenar datos en el navegador y recuperarlos luego. Usaremos la función setItem() de localStorage, que crea y almacena un dato en el elemento llamado 'nombre', y coloca este valor en la variable miNombre que contiene el nombre que el usuario ingresó. Finalmente, establecemos el textContent del título a una cadena, más el nombre de usuario recientemente almacenado.
 * 4. Luego, agregamos este bloque if ... else — podríamos llamar a esto el código de inicialización, como se ha establecido para cuando carga la app por primera vez Este primer bloque usa el operador negación (logical NOT) para comprobar si el elemento 'nombre' existe — si no existe, la función  estableceNombreUsuario() se iniciará para crearlo. Si ya existe (como por ejemplo cuando el usuario ya ingresó al sitio), recuperamos el dato del nombre usando getItem() y lo fijamos mediante textContent del titulo a la cadena, más el nombre del usuario, como hicimos dentro de estableceNombreUsuario().
 * */


var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}

/**Ahora cuando visite su sitio por primera vez, este le pedirá su nombre y le dará un mensaje personalizado de bienvenida. Puede cambiar cuantas veces quiera el nombre al presionar el botón. Y como un bonus añadido, ya que el nombre se almacena en el localStorage, este permanecerá después de que cierre el sitio, ¡manteniendo ahí el mensaje personalizado cuando abra el sitio la próxima vez! */

// https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics

// https://www.w3schools.com/js/js_intro.asp