let votosAnaMaria:number = 0;
let votosDiego:number = 0;

for (let p = 0; p < 10; p++) {
  let opcion:number = 1;
  
  if (opcion === 1) {
    votosAnaMaria++;
  } else if (opcion === 2) {
    votosDiego++;
  } else {
    console.log("Opción no válida.");
  }
}

if (votosAnaMaria > votosDiego) {
  console.log("El ganador es Ana Maria Suarez.");
} else if (votosDiego > votosAnaMaria) {
  console.log("El ganador es Diego Acero.");
} else {
  console.log("La votación terminó en empate.");
}

console.log(`Resultados:\nAna Maria Suarez: ${votosAnaMaria} votos\nDiego Acero: ${votosDiego} votos`);