const gasto_max = 350;
const impuesto = 0.09;
const precio = 150;
const costo accesorio = 15;
var saldo = 400;
var cantidad = 0;
function calculoImpuesto (amount) {
 return cantidad * impuesto;
}
function formatoFuente(cantidad) {
 return "$" + cantidad.toFixed( 2 );
}

while (cantidad < saldo) {

 cantidad = cantidad + precio;
 
 if (cantidad < gasto_max) {
    cantidad = cantidad + costo accesorio;
 }
}

cantidad = cantidad + calculoImpuesto( cantidad );
console.log(
 "Your purchase: " + formatoFuente( cantidad )
);


if (cantidad > saldo) {
 console.log(
 "You can't afford this purchase. :("
 );
}
