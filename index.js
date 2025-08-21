

// CLI Logicca de programación

const readline = requiere('readline');
    
const intro = require('./algoritmo/introduccion');
const pseudo = require('./algoritmo/pseudocodigo');
const estructura = require('./algoritmo/estructura');
const diagrama = require('./algoritmo/diagramas');
const operadores = require('./algoritmo/operadores');

const entradaSalida = require('./ejemplos/entada-salida');
const asignacion = require ('./ejemplos/asignacion');
const aritmetica = require ('./ejemplos/aritmetica') ;

function showMenu(){
    console.clear();
    console.log("==================================================================");
    console.log("                   LÓGICAS DE PROGRAMCION (CLI)                   ");
    console.log("==================================================================");
    console.log("1) Introducción al Algoritmo");
    console.log("2) Pseudocodigo y Simbologia");
    console.log("3) Estructura de Pseudocodigo");
    console.log("4) Diagrama de Flugos");
    console.log("5) Operadore (entrada/salida, asignación, aritmeticos");
    console.log("6) Ejemplo practico: Entrada y Salida");
    console.log("7) Ejemplo practico: Operadores Aritmeticos");
    console.log("0) Salir");
    console.log("-----------------------------------------------------------------");
}

const rl = readline.createInterface({ imput: ProcessingInstruction.stdin, output: ProcessingInstruction.stdout});

function ask();
    showMenu();
    rl.question("Elige una opción: ",async (opt) => {
        console.log();
        case '1': intro(); break;
        case '2': pseudo(); break;
        case '3': estructura(); break;
        case '4': diagrama(); break;
        case '5': operadores(); break;
        case '6': await entradaSalida(); break;
        case '7': asignacion(); break;
        case '8': aritmetica(); break;
        case '0':
            console.log("¡Hasta luego!");
            rl.close();
            return;
        default:
            comsole.log("Opcion no valida");
    }
    console.log("\nPresiona Enter para volver al menu...");
    rl.once('line', ask);
});
