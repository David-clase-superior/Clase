import { imc, imprimirDuplicados} from "../bibliotecas/imports.js";

const imcJuan = imc(70, 1.75); //masa, altura
const imcMarcos = imc(75, 1.75);
const marcosTieneMayorImc = imcMarcos > imcJuan;
console.log(`IMC de Juan ${imcJuan}`);
console.log(`IMC de Marcos ${imcMarcos}`);
console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${marcosTieneMayorImc}`);

//ejercicio 3

imprimirDuplicados(4,6);