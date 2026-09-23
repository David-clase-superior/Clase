"use strict";

function imc(masa, altura){
    return masa / (altura * altura);
}

function imprimirDuplicados(pasadas,numeroInicial){
        let contador = 1;
    for (let i = 0; i < pasadas; i++) {
        console.log(`Pasada: ${contador} ${numeroInicial}`);
        numeroInicial = numeroInicial *2;
        contador = contador + 1;
    }
}

function calcularFacturas(nombreProducto= `Producto_Generico`, precioProducto = 100, impuestoProducto = 21){
    let validacion = true;
    while(validacion === false){
        
    if(precioProducto !== isNaN || impuestoProducto !== isNaN){
        console.log(`Error. Número no válido`);
    }
    continue;
    }

    let precioCalculado = (precioProducto * 100) / impuestoProducto;
    console.log(`${nombreProducto}, ${precioCalculado}`);
}
export { imc, imprimirDuplicados, calcularFacturas};