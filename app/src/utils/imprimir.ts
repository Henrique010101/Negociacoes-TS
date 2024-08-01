import { Eimprimivel } from "./Eimprimivel.js";

export function imprimir (...objetos: Eimprimivel[]) {
    for( let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}