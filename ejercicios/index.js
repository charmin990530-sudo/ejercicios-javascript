const colores = ["rojo", "verde", "azul", "amarillo", "violeta"];

console.log("Primer color:", colores[0]);
console.log("Último color:", colores[colores.length - 1]);


const numeros = ["1", "2", "4", "5"]

console.log(`el array tiene, ${numeros.length} elementos`);

for (let i = 1; i <= 20; i = i + 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

const numeros1 = [15, 80, 23, 120, 67];
let numeroMayor = 0;

for (let i = 0; i < numeros1.length; i = i + 1) {
    if (numeros1[i] > numeroMayor) {
        numeroMayor = numeros1[i];
    }

}
console.log("El numero mayor es:", numeroMayor);

const productos = [
    { nombre: "mouse", precio: 50000 },
    { nombre: "teclado", precio: 120000 },
    { nombre: "monitor", precio: 800000 }
];

let precioTotal = 0;

for (let i = 0; i < productos.length; i = i + 1) {
    precioTotal = precioTotal + productos[i].precio;
}

console.log("El precio total es:", precioTotal);

const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Pedro", nota: 2.8 },
    { nombre: "Laura", nota: 4.0 },
    { nombre: "Carlos", nota: 2.5 }
];

for (let i = 0; i < estudiantes.length; i = i + 1) {
    if (estudiantes[i].nota >= 3.0) {
        console.log(estudiantes[i].nombre, "-", estudiantes[i].nota)


    }

}

const ejercicios = [
    { nombre: "Sentadilla", peso: 80 },
    { nombre: "Press banca", peso: 60 },
    { nombre: "Peso muerto", peso: 120 },
    { nombre: "Dominadas lastradas", peso: 25 }
];

let maximoPeso = 0;
let ejercicioMasPesado = "";

for (let i = 0; i < ejercicios.length; i = i + 1) {
    if (ejercicios[i].peso > maximoPeso) {
        maximoPeso = ejercicios[i].peso;
        ejercicioMasPesado = ejercicios[i].nombre;
    }
}

console.log(`El ejercicio más pesado es ${ejercicioMasPesado} con ${maximoPeso} kg`);

const boxeadores = [
    { nombre: "Floyd Mayweather", victorias: 50, derrotas: 0, kos: 27 },
    { nombre: "Mike Tyson", victorias: 50, derrotas: 6, kos: 44 },
    { nombre: "Muhammad Ali", victorias: 56, derrotas: 5, kos: 37 },
    { nombre: "Gennadiy Golovkin", victorias: 42, derrotas: 2, kos: 37 }
];

let maxVictorias = 0;
let boxeadorMasVictorias = "";
let maxKos = 0;
let boxeadorMasKos = "";

console.log("=== ESTADÍSTICAS DE BOXEADORES ===");

for (let i = 0; i < boxeadores.length; i = i + 1) {
    const peleasTotales = boxeadores[i].victorias + boxeadores[i].derrotas;
    const porcentajeVictorias = (boxeadores[i].victorias / peleasTotales) * 100;
    const porcentajeKo = (boxeadores[i].kos / peleasTotales) * 100;

    console.log(boxeadores[i].nombre);
    console.log(`Peleas: ${peleasTotales} (${boxeadores[i].victorias}V - ${boxeadores[i].derrotas}D)`);
    console.log(`% de victorias: ${porcentajeVictorias.toFixed(1)}%`);
    console.log(`% de KO: ${porcentajeKo.toFixed(1)}%`);

    // Aprovechamos la MISMA vuelta del for para ir comparando "el mejor",
    // en vez de hacer un segundo for aparte — mismo patrón siempre.
    if (boxeadores[i].victorias > maxVictorias) {
        maxVictorias = boxeadores[i].victorias;
        boxeadorMasVictorias = boxeadores[i].nombre;
    }

    if (boxeadores[i].kos > maxKos) {
        maxKos = boxeadores[i].kos;
        boxeadorMasKos = boxeadores[i].nombre;
    }
}

console.log("--- RESUMEN ---");
console.log(`Boxeador con más victorias: ${boxeadorMasVictorias} (${maxVictorias} victorias)`);
console.log(`Boxeador con más KOs: ${boxeadorMasKos} (${maxKos} KOs)`);

const productos1 = [
    {
        nombre: "tablet",
        marca: "amazon",
        precio: 500000,
        stock: 14,
        modelo: 2021
    },

    {
        nombre: "iphone",
        marca: "apple",
        precio: 1000000,
        stock: 200,
        modelo: 2025
    },

    {
        nombre: "portatil",
        marca: "acer",
        precio: 50000000,
        stock: 150,
        modelo: 2021
    },

    {
        nombre: "ipad",
        marca: "apple",
        precio: 3000000,
        stock: 1000,
        modelo: 2021
    },

    {
        nombre: "luces",
        marca: "espectro-completo",
        precio: 500000,
        stock: 150,
        modelo: 2024
    },

    {
        nombre: "carpa",
        marca: "indoor",
        precio: 4500000,
        stock: 100,
        modelo: 2026
    }
]

let inversionTotal = 0
let productoMasCaro = productos1[0]
let productoMasEconomico = productos1[0]
let productoMasInvertido = productos1[0]
let mayorInversion = 0

for (let i = 0; i < productos1.length; i++) {
    let inversion = productos1[i].precio * productos1[i].stock
    inversionTotal = inversionTotal + inversion

    
// producto más caro
if (productos1[i].precio > productoMasCaro.precio) {
    productoMasCaro = productos1[i]
}

// producto más económico
if (productos1[i].precio < productoMasEconomico.precio) {
    productoMasEconomico = productos1[i]
}

// producto con mayor inversión (precio * stock)
if (inversion > mayorInversion) {
    mayorInversion = inversion
    productoMasInvertido = productos1[i]
}
}

console.log("Inversión total:", inversionTotal)
console.log("Producto más caro:", productoMasCaro.nombre, "-", productoMasCaro.precio)
console.log("Producto más económico:", productoMasEconomico.nombre, "-", productoMasEconomico.precio)
console.log("Producto con mayor inversión:", productoMasInvertido.nombre, "-", mayorInversion);

