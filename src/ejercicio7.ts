let causa:string = "devolucion";
let retrasoRevista:number = 500;
let retrasoLibro:number = 600;
let perdidaMulta:number = 10000;
let devolucion:string = "devolucion";
let perdida:string = "perdida";

if (causa === devolucion) {
  let cantidadDias:number = 2;
  let revista:number = 1;
  let libro: number = 0;
  let multa1:number = revista * retrasoRevista;
  let multa2:number = libro * retrasoLibro;
  let multaTotal:number = multa1 + multa2;
  console.log(`El total a pagar de la multa es: ${multaTotal}`);
} else if (causa === perdida) {
  let ejemplar:number = 3;
  let multaTotal2:number = ejemplar * perdidaMulta;
  console.log(`El total a pagar por pérdida es: ${multaTotal2}`);
} else {
  console.log("Error, debe ingresar alguna de las dos causas.");
}