var  asistencias, cantiClases=10, minasistencia=80, calificacion, porcenAsistencias, opcion


do {
    opcion=parseInt(prompt(" 1.ingrese 2.salir"))
switch (opcion) {
 case 1:
 asistencias=parseInt(prompt(" el maximo de clases es 10 clases ¿a cuantas clases asistio ?"));
 calificacion=parseFloat(prompt("dado la nota maxima 5,0 ingrese la nota del alumno"));
 porcentajeAsistencias= (asistencias/cantiClases)*100
 switch (true) {
 case (porcentajeAsistencias>=minasistencia && calificacion>=3.0):
  alert("el alumno aprueba con " +calificacion + " de nota, y un "+porcenAsistencias +" % de asistencia");
  break;
  default:
  alert("el alumno no aprueba ya que no le alcanzo la calificacion " +calificacion + " y un "+porcenAsistencias +"% de asistencia");
    break;
  }
    break;
}
}    while (opcion !=2);