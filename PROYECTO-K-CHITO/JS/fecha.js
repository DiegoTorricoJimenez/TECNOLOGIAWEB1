var mes=new Array("Enero","Febrero","Marzo","Abril","Mayo",
"Junio","Julio","Agosto","Septiembre","Octubre","Noviembre",
"Diciembre");

var Nombres_Dia_Semana=new Array("Domingo","Lunes","Martes",
"Miercoles","Jueves","Viernes","Sabado");



var d=new Date();


//para la hora del sistema
var hora=d.getHours();

//para obtener minutos del sistema
var minutos=d.getMinutes();
//para obtener segundos del sistema
var segundos=d.getSeconds();


//la variable obtendra la posicion getDay 0 si es domingo, 1 si es lunes.... getDate obtendra el dia de la semana. getMonth obtendra el mes 0 si es enero 1 si es febrero y asi.
document.write("Fecha : "+Nombres_Dia_Semana[d.getDay()] +", "+d.getDate()+" "+ mes[d.getMonth()]+" "+d.getFullYear()+"<br>"+" Hora: "+hora+" : "+minutos+" : "+segundos);