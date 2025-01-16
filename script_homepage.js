$(document).ready(function () {
  // Inicializa Scrollify
  applyScroll();

  // Vincula los botones laterales a las secciones correspondientes
  $(".scroll-control .one").click(function () {
    $.scrollify.move("#s-one");
  });
  $(".scroll-control .two").click(function () {
    $.scrollify.move("#s-two");
  });
  $(".scroll-control .three").click(function () {
    $.scrollify.move("#s-three");
  });
  $(".scroll-control .four").click(function () {
    $.scrollify.move("#s-four");
  });
  $(".scroll-control .five").click(function () {
    $.scrollify.move("#s-five");
  });

  // Vincula los enlaces del menú a las secciones
  $(".navbar .nav-link").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $.scrollify.move(target);
  });
});

// Inicializa Scrollify con las configuraciones deseadas
function applyScroll() {
  $.scrollify({
    section: ".scroll",       // Selección de las secciones con la clase 'scroll'
    sectionName: "section-name", // Nombre de la sección
    easing: "easeOutExpo",     // Efecto de desplazamiento
    scrollSpeed: 1100,         // Velocidad del desplazamiento
    offset: 0,                 // Offset para el desplazamiento
    scrollbars: true,          // Habilita barras de desplazamiento
    setHeights: true,          // Ajuste automático de la altura
    overflowScroll: true,      // Permite desplazamiento con el ratón
    updateHash: false,         // No actualiza el hash
    touchScroll: true,         // Desplazamiento táctil
  });
}
