let servicio: string = "2";

if (servicio === "1"){
    let lavado: string = "2";
    if (lavado === "1"){
        let prendas: number = 2 
        let costo: number = 4000 * prendas;
        if (servicio === "1"){
        }
        console.log("El costo total es: " + costo);
    } else if (lavado === "2"){
        let prendas: number = 3;
        let costo: number = 3000 * prendas;
        if (servicio === "1"){
        }
        console.log("El costo total es: " + costo);
    }
    
} else if (servicio === "2"){
    let prendas: number = 3;
    let costo: number = 2000 * prendas;
    if (servicio === "2"){
        costo = costo + 4000;
    }
    console.log("El costo total es: " + costo);
}

