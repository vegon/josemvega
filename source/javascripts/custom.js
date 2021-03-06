$(function() {
  
var controller;
// init controller
controller = new ScrollMagic();

////// FLECHAS
// Flecha de Inicio
var tween1 = TweenMax.fromTo(".flecha-inicio", 0.5,
    {"margin": "0 49%"},
    {"margin": "-30px 49% 0"}
  );
var scene1 = new ScrollScene({offset: 100, duration: 100})
        .setTween(tween1)
        .addTo(controller);
        
// Flecha de sobre mi
var tween2 = TweenMax.fromTo(".flecha-habilidades", 0.5,
    {"margin": "0 49%"},
    {"margin": "-30px 49% 0"}
  );
var scene2 = new ScrollScene({offset: 1500, duration: 400})
        .setTween(tween2)
        .addTo(controller);
        
// Flecha de contacta
var tween3 = TweenMax.fromTo(".flecha-sobre-mi", 0.5,
    {"margin": "0 49%"},
    {"margin": "-30px 49% 0"}
  );
var scene3 = new ScrollScene({offset: 2300, duration: 400})
        .setTween(tween3)
        .addTo(controller);
        

////// MENUS
// Menu de Inicio
$('#habilidades').waypoint(function() {
  $('.nav_principal').toggleClass("inicio");
}, { offset: 30 });

$('.nav_principal').onePageNav({
  currentClass: 'activo',
  changeHash: false,
  scrollSpeed: 800,
  scrollThreshold: 0.3,
  easing: 'swing'
});

var tween4 = TweenMax.fromTo(".nav_principal", 0.5,
    {"padding": "50px 0 0 0"},
    {"padding": "0px 0 0 0"}
  );
var scene4 = new ScrollScene({offset: 100, duration: 100})
        .setTween(tween4)
        .addTo(controller);



////// Parallax de secciones
// Inicio
var tween5 = TweenMax.fromTo(".introduccion", 0.5,
    {"margin": "0 0 0 0"},
    {"margin": "600px 0 0 0"}
  );
var scene5 = new ScrollScene({offset: 0, duration: 800})
        .setTween(tween5)
        .addTo(controller);
var tween6 = TweenMax.fromTo(".fondo", 0.5,
    {"margin": "0 0 0 0"},
    {"margin": "600px 0 0 0"}
  );
var scene6 = new ScrollScene({offset: 0, duration: 800})
        .setTween(tween6)
        .addTo(controller);



//////// Imagenes
$("img").unveil(-150,function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});



/////// Correo y Tlf
$('.datos span.email').html('jm.vega.farina@gmail.com');
$('.datos span.tlf').html('680 140 504');

});