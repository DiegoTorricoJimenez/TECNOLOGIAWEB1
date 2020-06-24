//muestra fecha actual 23 de junio
var fecha_actual=new Date();

//(getDay (obtenemos numero  del dia del mes dado el caso 23)). esta variable obtenemos el dia de la fecha. 
var dia=fecha_actual.getDate();//

//obtenemos el mes
var mes=fecha_actual.getMonth()+1;

//variables para el año con cuatro digitos
var anio=fecha_actual.getFullYear();








//para la hora del sistema
var hora=fecha_actual.getHours();

//para obtener minutos del sistema
var minutos=fecha_actual.getMinutes();
//para obtener segundos del sistema
var segundos=fecha_actual.getSeconds();







//obtenemos dia mes y año 
document.write(dia+" / "+mes+" / "+anio +" "+hora+": "+minutos+": "+segundos);








var mes=new Array("Enero","Febrero","Marzo","Abril","Mayo",
"Junio","Julio","Agosto","Septiembre","Octubre","Noviembre",
"Diciembre");

var Nombres_Dia_Semana=new Array("Domingo","Lunes","Martes",
"Miercoles","Jueves","Viernes","Sabado");



var d=new Date();
//la variable obtendra la posicion getDay 0 si es domingo, 1 si es lunes.... getDate obtendra el dia de la semana. getMonth obtendra el mes 0 si es enero 1 si es febrero y asi.
document.write(Nombres_Dia_Semana[d.getDay()] +", "+d.getDate()+" "+ mes[d.getMonth()]+" "+d.getFullYear());