//menu desplegable
let botonmenu = document.querySelector('.boton-menu');/*let te permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando */
let barIcono = document.querySelector('.boton-menu');
let opcionesmenu = document.querySelector('.opciones-menu');
let menuprincipal=document.querySelector('.menu-principal');
var activador=true;
botonmenu.addEventListener('click', (event) => {

    //Icon X
    barIcono.classList.toggle('fa-times');/*fa-times es una clase que esta ubicada en estilos.css */
  
     if(activador){/*si el activador es true entra en la condicion*/
      opcionesmenu.style.left = '0%'; /*0% con esta opcion el menu desplegable se posicionara en toda la pagina y no se mostrara oculto*/
       opcionesmenu.style.transition = '0.4s';/*0.4s es el tiempo que tardara en desplegarse el menu hacia de izquierda a derecha y se vera en toda la pagina*/
    
       activador = false;
     }
     else{
      activador = false;
      opcionesmenu.style.left = '-100%';/*Con esta opcion el menu de opciones se ocultara a la vista hacia lado izquierdo ya que si dejamos en un -50% veremos que se posiona a la mitad de la pagina*/
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