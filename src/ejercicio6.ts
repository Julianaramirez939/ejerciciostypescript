let producto: string = "1";
let costo: number = 0;

if (producto === "1") {
    let porciones: number = 2;
    costo = 7000 * porciones;
    console.log("El costo total es: " + costo);
} else if (producto === "2") {
    let porciones: number = 3;
    costo = 5000 * porciones;
    console.log("El costo total es: " + costo);
} else if (producto === "3") {
    let porciones: number = 2;
    costo = 15000 * porciones;
    console.log("El costo total es: " + costo);
}

let agregarSalsa: string = "1";

if (agregarSalsa === "1") {
    costo = costo + 500;
    console.log("El costo total del producto con salsa es: " + costo);
} else if (agregarSalsa === "2") {
    console.log("Sin salsa");
}
