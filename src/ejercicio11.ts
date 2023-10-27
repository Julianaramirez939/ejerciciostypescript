let tipoPago:string= "moneda";
let pesa:number = 500;
let monto:number= 0;

if (tipoPago === "moneda") {
    let valorMoneda:number = 1000;

    if (valorMoneda === 500 || valorMoneda === 1000) {
        monto += valorMoneda; 
        console.log(`Se añadieron ${valorMoneda} pesos al monto.`);
        let vueltaMoneda:number = monto - pesa;
        
        if (monto >= pesa) {
            console.log("¡Gracias por utilizar la pesa!");
            if (vueltaMoneda > 0) {
                console.log(`Tu vuelta es: ${vueltaMoneda} pesos.`);
            }
        } else {
            let faltaDinero:number = pesa - monto;
            console.log(`Falta dinero para completar el pago. Necesitas ${faltaDinero} pesos.`);
        }
    } else {
        console.log("El valor de la moneda es inválido, ingresa otra moneda.");
    }
} else if (tipoPago === "billete") {
    let valorBillete:number = 2000;

    if (valorBillete === 2000 || valorBillete === 5000) {
        let cambio:number = monto - pesa;

        if (monto >= pesa) {
            console.log("¡Gracias por usar la pesa!");
            if (cambio > 0) {
                console.log(`Tu cambio es: ${cambio} pesos.`);
            }
        } else {
            let faltaDinero:number = pesa - monto;
            console.log(`Falta dinero para completar el pago. Necesitas ${faltaDinero} pesos.`);
        }
    } else {
        console.log("El valor del billete es inválido, ingresa otro billete.");
    }
} else {
    console.log("Tipo de pago no válido. Debe ser 'moneda' o 'billete'.");
    
}
console.log("¡Vuelve pronto!");