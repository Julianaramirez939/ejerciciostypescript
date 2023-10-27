let numero: number = 2;

console.log("Tabla de multiplicar del " + numero + ":");

let multiplicador: number = 1;
while (multiplicador <= 10) {
    let resultado: number = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + resultado);
    multiplicador++;
}