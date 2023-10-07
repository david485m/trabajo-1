var primerNu, segundoNu, operacion, opcion

do {
    opcion=parseInt(prompt(" 1.ingresar 2.salir"))
    switch (opcion) {
   case 1:
 primerNu=parseFloat(prompt("ingrese el primer numero"));
 segundoNu=parseFloat(prompt("ingrese el segundo numero"));
 switch (true) {
  case (primerNu>segundoNu):
  operacion=primerNu+segundoNu
 alert("primer numero de mayor valor  se les aplica la  suma y su resultado es  "+operacion);
 break;
 case (primerNu==segundoNu):
  operacion=primerNu+segundoNu
 alert("los numeros son iguales");
     break;
 default:
 operacion=(primerNu*primerNu)+(segundoNu*segundoNu)
 alert(" el segundo numero de mayor valor se eleva al cuadrado ambos numeros y los sumaran a su resultado es  "+operacion);
    break;
     }
    break;
    break;
    }
} while (opcion !=2);