interface Equipo {
    nombre: string;
    puntos: number;
}

let equipos: Equipo[]= [
    { nombre: "Real Madrid", puntos: 0 },
    { nombre: "Bayern Munich", puntos: 0 },
    { nombre: "Barcelona", puntos: 0 }
];

function calcularPuntos(resultado: string): number {
    if (resultado === "victoria") {
        return 3;
    } else if (resultado === "empate") {
        return 1;
    } else {
        return 0;
    }
}

let fecha: number = 1;
while (fecha <= 3) {
    console.log("Fecha" + fecha + " :12/03/23");

    let equipo: number = 0;
    while (equipo < equipos.length) {
        // Valores de ejemplo
        let marcadorEquipo: number;
        let resultadoEquipo: string;

        // Asignación de valores de ejemplo
        if (equipo === 0) {
            marcadorEquipo = 2;
            resultadoEquipo = "victoria";
        } else if (equipo === 1) {
            marcadorEquipo = 1;
            resultadoEquipo = "empate";
        } else {
            marcadorEquipo = 0;
            resultadoEquipo = "derrota";
        }

        equipos[equipo].puntos += calcularPuntos(resultadoEquipo.toLowerCase());

        console.log("Equipo " + equipos[equipo].nombre + ": " + resultadoEquipo + " con marcador " + marcadorEquipo);

        equipo++;
    }

    fecha++;
}

equipos.sort((a, b) => b.puntos - a.puntos);

console.log("Ranking de equipos:");
let i: number = 0;
while (i < equipos.length) {
    console.log(equipos[i].nombre + ": " + equipos[i].puntos + " puntos");
    i++;
}
