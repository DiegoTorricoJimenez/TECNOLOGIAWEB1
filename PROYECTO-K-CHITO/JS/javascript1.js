//menu desplegable
let botonmenu = document.querySelector('.boton-menu');
let barIcono = document.querySelector('.boton-menu');
let opcionesmenu = document.querySelector('.opciones-menu');
let menuprincipal=document.querySelector('.menu-principal');
var activador=true;
botonmenu.addEventListener('click', (event) => {

    //Icon X
    barIcono.classList.toggle('fa-times');
  
     if(activador){
      opcionesmenu.style.left = '0%'; 
       opcionesmenu.style.transition = '0.4s';
    
       activador = false;
     }
     else{
      activador = false;
      opcionesmenu.style.left = '-100%';
      activador = true;
     }
  });
let enlace = document.querySelectorAll('.opciones li a');
    enlace.forEach((element) => {
    element.addEventListener('click', (event) => {
    enlaces.forEach((link) => {
    link.classList.remove('active');
   });
    event.target.classList.add('active');
  });

});