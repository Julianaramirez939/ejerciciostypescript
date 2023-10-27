const y: number = 5;
const z: number = 5;
let s: number = 0;

while (s < y) {
    if (s % 2 === 0) {
        console.log("* ".repeat(z) + "=".repeat(z * 9));
    } else {
        console.log("* ".repeat(z + 1) + "=".repeat(z * 9));
    }
    s++;
}

console.log("=".repeat(43));