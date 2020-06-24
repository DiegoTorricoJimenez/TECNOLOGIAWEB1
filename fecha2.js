var month=new Array("Enero","Febrero","Marzo","Abril","Mayo",
"Junio","Julio","Agosto","Septiembre","Octubre","Noviembre",
"Diciembre");

var dayofweek=new Array("Domingo","Lunes","Martes",
"Miercoles","Jueves","Viernes","Sabado");



var d=new Date();
//la variable obtendra la posicion getDay 0 si es domingo, 1 si es lunes.... getDate obtendra el dia de la semana. getMonth obtendra el mes 0 si es enero 1 si es febrero y asi.
document.write(dayofweek[d.getDay()] +", "+d.getDate()+" "+ month[d.getMonth()]+" "+d.getFullYear());