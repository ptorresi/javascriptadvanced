/*
Vamos a hacer funcionar la interfaz. Se trata de un sitio personal muy sencillo.
NO debes modificar los archivos HTML y CSS, solo agrega lineas de código JS.
El objetivo es que al pulsar el botón de menú, aparezca un modal con los enlaces para visitar cada página(section).
La idea es ocultar todo y solo mostrar el section seleccionado desde el modal.
Sigue los 10 pasos y obtendrás el resultado esperado:
----------------------------------------------------------------- */

// 1) En esta linea Captura el botón menú
let btnModal = document.getElementById('btnModal');
// 2) Captura el overlay
var overlay = document.getElementsByClassName('overlay');
overlay = overlay[0];
// 3) Captura el modal
var modal = document.getElementsByClassName('modal');
modal = modal[0];
// 4) Captura todas las views
viewHome = document.getElementById('home');
viewServices = document.getElementById('services');
viewAbout = document.getElementById('about');
viewContact = document.getElementById('contact');

// 5) cuando el botón menú es clickeado, debes hacer que el modal se abra y el overlay se debe mostrar (ver las clases disponibles en el css adjunto)
this.btnModal.onclick = () => this.AbrirModal();

function AbrirModal(){
  modal.className = 'modal open';
  overlay.className = 'overlay';
}
// 6) cuando el overlay es clickeado, debes ocultar el modal y el overlay.

this.overlay.onclick = () => this.CerrarModal();

function CerrarModal(){
  modal.className = 'modal';
  overlay.className = 'overlay hidden';
}

window.onhashchange = function(){
  let vistaElegida = location.hash;

  // 7) En esta linea todas las vistas deben ocultarse
  viewHome.className = 'hidden';
  viewServices.className='hidden';
  viewAbout.className='hidden';
  viewContact.className='hidden';

  // 8) captura el section perteneciente a la vista elegida
  let nombreVista = vistaElegida.split('#');
  nombreVista = nombreVista[1];
  let sectionCapturada = document.getElementById(nombreVista);

  // 9) desocultar el section capturado en el punto anterior

  sectionCapturada.className = 'view';
  // 10) debes ocultar el modal y el overlay.
  
  CerrarModal();
}

/* -----------------------------------------------------------------
NOTA: ¿Que es eso de window.onhashchange?
window es el objeto que representa al navegador, también conocido como BOM (Browser Object Model)
Éste objeto puede escuchar el evento hashchange, que ocurre cuando un enlace agrega un ancla en la barra de direcciones.
Los enlaces <a>(anchor) que tengan un href que empiece con #, agregan un ancla en la url, entonces se produce el evento hashchange

location es un objeto que representa a la barra de direcciones del navegador. Su propiedad hash nos permite leer el ancla actual.
Prueba de pulsar los enlaces cuando el modal pueda abrirse, y verás como cada enlace <a> agrega un ancla.

leyendo el location.hash, tenemos en la variable vistaElegida, el ancla que justamente coincide con los id de cada section.
*/