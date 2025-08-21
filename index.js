
---

### `index.js`
```javascript
// CLI educativo de Lógica de Programación
const readline = require('readline');

const intro = require('./algoritmos/introduccion');
const pseudo = require('./algoritmos/pseudocodigo');
const estructura = require('./algoritmos/estructura');
const diagramas = require('./algoritmos/diagramas');
const operadores = require('./algoritmos/operadores');

const entradaSalida = require('./ejemplos/entrada-salida');
const asignacion = require('./ejemplos/asignacion');
const aritmeticos = require('./ejemplos/aritmeticos');


function showMenu() {
  console.clear();
  console.log("============================================");
  console.log("        LÓGICA DE PROGRAMACIÓN (CLI)        ");
  console.log("============================================");
  console.log("1) Introducción a Algoritmos");
  console.log("2) Pseudocódigo y Simbología");
  console.log("3) Estructura de Pseudocódigo");
  console.log("4) Diagramas de Flujo (simbología)");
  console.log("5) Operadores (entrada/salida, asignación, aritméticos)");
  console.log("6) Ejemplo práctico: Entrada y salida");
  console.log("7) Ejemplo práctico: Asignación");
  console.log("8) Ejemplo práctico: Operadores aritméticos");
  console.log("0) Salir");
  console.log("--------------------------------------------");
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask() {
  showMenu();
  rl.question("Elige una opción: ", async (opt) => {
    console.log();
    switch (opt.trim()) {
      case '1': intro(); break;
      case '2': pseudo(); break;
      case '3': estructura(); break;
      case '4': diagramas(); break;
      case '5': operadores(); break;
      case '6': await entradaSalida(); break;
      case '7': asignacion(); break;
      case '8': aritmeticos(); break;
      case '0':
        console.log("¡Hasta luego!");
        rl.close();
        return;
      default:
        console.log("Opción no válida.");
    }
    console.log("\nPresiona Enter para volver al menú...");
    rl.once('line', ask);
  });
}

ask();
