var monto, descuento1=0.1, descuentosegun=0.02, montoDes, descuento, opcion

do {
    opcion=parseInt(prompt(" 1.ingresar 2.salir"))
    switch (opcion) {
        case 1:
            monto=parseInt(prompt("ingrese el monto menor a 100  2% de descuento y mayor o igual da un 10%"));
            switch (true) {
            case (monto>=100):
            montoDes=monto-(monto*descuento1)
            descuento=monto*descuento1
            alert("se dio un descuento del 10% a " +descuento+ "  el monto con descuento es "+ montoDes);
         break;
         default:
            montoDes=monto-(monto*descuentosegun)
            descuento=monto*descuentosegun
            alert("se dio un descuento del 2% a " +descuento+ "  el monto con descuento es  "+ montoDes);
         break;
        }
    break;
    }
} while (opcion !=2);