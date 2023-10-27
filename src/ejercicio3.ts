let costoApartamento: number = 20000;
let opcion: string;
let tipoInmueble: number;

while (true) {
  opcion = "1";
  tipoInmueble = parseInt(opcion);

  if (tipoInmueble === 1 || tipoInmueble === 2) {
    break;
  } else {
    console.log("La opción seleccionada no es válida. Elige 1 o 2.");
  }
}

let comisionInmobiliaria: number;

if (tipoInmueble === 1) {
    comisionInmobiliaria = costoApartamento * 0.1;
} else if (tipoInmueble === 2) {
    comisionInmobiliaria = costoApartamento * 0.2;
} else {
    comisionInmobiliaria = 0; // Otra opción en caso de valor inválido
}

let valorPropietario: number = costoApartamento - comisionInmobiliaria;
let valorInmobiliaria: number = comisionInmobiliaria;

console.log(`La comisión de la inmobiliaria es: ${valorInmobiliaria}`);
console.log(`El valor que recibe el propietario es: ${valorPropietario}`);

console.log("¡Muchas gracias, hasta luego!");
