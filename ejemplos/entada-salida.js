const readline = require('readline');
module.exports = async function() {
console.log("Ejemplo: Entrada y Salida");
console.log("-------------------------");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(res => rl.question(q, ans => res(ans)));

const nombre = await ask("Como te llamas? ");
console.log(`Hola ${nombre}!`);
const a = Number (await ask("Ingresa A: "));
const b = Number (await ask("Ingresa B: "));
const s = a + b;
console.log(`La suma de ${a} + ${b} es: ${s}`);
rl.close(); 
};