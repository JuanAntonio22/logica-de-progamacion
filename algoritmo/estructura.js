module.exports = function() {
    console.log("Estructura de Pseudocódigo");
    console.log("--------------------------");
    console.log("Bloques tipicos:");
    console.log("-Declaraciones: definir variables");
    console.log("-Entrada/Salida: LEER, ESCRIBIR");
    console.log("-Asignaciones: <-");
    console.log("Control: si / sino, mientras, para");
    console.log("-Subprosesos/ funciones: procedimiento / funcion");
    console.log("\nPlantilla");
    console.log(`ALGORITMO Nombre
        // Declaraciones
        VAR A, B, S: ENTERO
        //Entrada
        LEER A, B
        //Proceso
        S <- A + B
        //Salida
        ESCRIBIR S
        FINALGORITMO`);
}