const colores = ["rojo", "verde", "azul", "amarillo", "violeta"];

console.log("Primer color:", colores[0]);
console.log("Último color:", colores[colores.length - 1]);


const numeros = ["1", "2", "4", "5"]

console.log (`el array tiene, ${numeros.length} elementos`);

for (let i = 1; i <= 20; i = i + 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for ( let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}
