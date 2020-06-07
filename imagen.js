
/** Añadiendo un cambiador de imagen
En esta sección añadiremos otra imagen a nuestro sitio usando la DOM API y agregaremos un poco de código para cambiar entre imágenes al hacer click.

1. Primero que todo, busca una imagen que le guste para su sitio. Asegúrate que sea del mismo tamaño que la primera, o lo más cerca posible.
2. Guarda tu imagen en tu carpeta images.
3. Renombra esta imagen.
4. Ve a tu archivo main.js, y agrega el siguiente JavaScript
Guarda todos los archivos y carga index.html en tu navegador. Ahora cuando hagas click en la imagen, ¡esta debe cambiar por otra!*/

var miImage = document.querySelector('img');

miImage.onclick = function () {

    var miSrc = miImage.getAttribute('src');

    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/js.png');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

/** Se almacena una referencia a tu elemento <img> en la variable miImage. Luego, hacemos que esta propiedad del manejador de evento onclick de la variable sea igual a una función sin nombre (una función "anónima"). Ahora, cada vez que se haga click en la imagen :

1. Recuperas el valor del atributo src de la imagen.
2. Usas una condicional para comprobar si el valor src es igual a la ruta de la imagen original:
  - Si es así, cambias el valor de  src a la ruta de la segunda imagen, forzando a que se cargue la otra imagen en el elemento <img>.
  - Si no es así (significa que ya fue modificada), cambiaremos el valor de src nuevamente a la ruta de la imagen original , regresando a como era en un principio.*/