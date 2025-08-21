module.exports = function() {
    console.log("Diagramas de flujo - Simblogia básica");
    console.log("-------------------------------------");
    console.log("Inicio y Fin:              óvalo");
    console.log("Proceso:                   rectángulo");
    console.log("Decisión (si/sino):        rombo");
    console.log("Entrada/Salida:            paralelogramo");
    console.log("Conector:                  círculo");
    console.log("\nEjemplo (diagrama de flujo para sumar dos números):");
    console.log(`
        [Inicio]
            |
        [Leer A, B]
            |
        [S <- A + B]
            |
        [Escribir S]
            |
        [Fin]
    `);
}