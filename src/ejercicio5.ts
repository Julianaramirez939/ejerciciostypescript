let tamaño:string= "pequeño";
let precioPequeño: number = 4000;
let precioGrande:number = 6000;
let cantidad:number

if (tamaño === "pequeño" || tamaño === "grande") {
  while (true) {
    cantidad = 10;
    
    if (cantidad >= 10) {
      break;
    } else {
      console.log("La cantidad debe ser mayor o igual a 10. Por favor, intenta de nuevo.");
    }
  }

  let costoTotal:number;
  if (tamaño === "pequeño") {
    costoTotal = cantidad * precioPequeño;
  } else {
    costoTotal = cantidad * precioGrande;
  }

  console.log(`El costo total es: ${costoTotal}`);
} else {
  console.log("Tamaño no válido");
}