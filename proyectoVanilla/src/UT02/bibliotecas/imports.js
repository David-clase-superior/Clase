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

export { imc, imprimirDuplicados};