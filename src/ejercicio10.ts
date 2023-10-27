let puntajeTotal: number = 0;
let contador: number = 1;

function evaluarPregunta(pregunta: string, respuestaCorrecta: string) {
    console.log(pregunta);
    let respuestaUsuario: string = "V";

    if (respuestaUsuario === respuestaCorrecta) {
        puntajeTotal += 10;
        console.log("Respuesta correcta. ¡Sumas 10 puntos!");
    } else {
        console.log("Respuesta incorrecta.");
    }
}

while (contador <= 5) {
    console.log("Pregunta " + contador + ":");

    switch (contador) {
        case 1:
            evaluarPregunta("¿Colombia es una ciudad de América Latina? (V/F)", "F");
            break;
        case 2:
            evaluarPregunta("¿La capital de Francia es Madrid? (V/F)", "F");
            break;
        case 3:
            evaluarPregunta("¿El agua hierve a 100 grados Celsius? (V/F)", "V");
            break;
        case 4:
            evaluarPregunta("¿El símbolo químico del oxígeno es O2? (V/F)", "F");
            break;
        case 5:
            evaluarPregunta("¿La letra 'a' es la primera letra del abecedario? (V/F)", "V");
            break;
        default:
            break;
    }

    contador++;
}

console.log("Examen completado.");
console.log("Cantidad de respuestas correctas: " + (puntajeTotal / 10));
console.log("Puntaje total obtenido: " + puntajeTotal + " puntos.");
