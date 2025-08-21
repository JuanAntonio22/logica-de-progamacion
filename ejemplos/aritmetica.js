module.exports = function() {
    console.log("Ejemplo: Aritmética");
    console.log("------------------");
    let a = 10, b = 3;
    console.log(`A = ${a}, B = ${b}`);
    console.log(`A + B = ${a + b}`);
    console.log(`A - B = ${a - b}`);
    console.log(`A * B = ${a * b}`);
    console.log(`A / B = ${a / b}`);
    console.log(`A % B = ${a % b}`);
    console.log(`(A + B) * B = ${(a + b) * b}`);
    console.log("expresiones con precedencia: 2 + 3 * 4 ="  , 2 + 3 * 4);
    console.log("con parentesis: (2 + 3) * 4 ="  , (2 + 3) * 4);
};