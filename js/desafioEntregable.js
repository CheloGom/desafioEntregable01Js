console.log("Desafio")

function descuento(numero, porcentaje) {
    let totalDesc = numero * porcentaje / 100
    let precioFinal = numero - totalDesc
    return precioFinal
}


function impuesto(numero, porcentaje) {
    let impuesto = numero * porcentaje / 100
    let totalImp = impuesto + numero
    return totalImp
}
let numero = parseInt (prompt ("Ingresa un numero"));
let porcentaje = parseInt (prompt ("Ingresa el % de descuento o interes"));
let opcionUsuario = parseInt(prompt("Seleccione: (1) descuento , seleccione: (2) impuesto"));
let pregunta = 1 
do {
    switch (opcionUsuario) {
        case 1:
            
            alert("El precio final es: $" + descuento(numero, porcentaje));

            break;
        case 2:
            alert("El precio final es: $" + impuesto(numero, porcentaje));

        

            break;

        default: alert("El dato ingresa es invalido") 
            break;
    }
    pregunta = prompt('¿Desea hacer alguna otra accion? \n1.-Si \t2.-No')
    if (pregunta == 1){
        numero = parseInt (prompt ("Ingresa un numero"));
        porcentaje = parseInt (prompt ("Ingresa el % de descuento o interes"));
        opcionUsuario = parseInt(prompt("Seleccione: (1) descuento , seleccione: (2) impuesto"));
    }


} while (pregunta == 1);
