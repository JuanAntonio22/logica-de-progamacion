module.exports = function() {
    console.log("Operadores y Asiganacion");
    console.log("------------------------");
    console.log("Asignacion: Variable = Expresion");
    console.log("Compuestos: +=, -=, *=, /=, %=");
    console.log("\nAritmeticos:");
    console.log("+  Suma(+), Resta(-), Multiplicacion(*), Division(/), Modulo(%)");
    console.log("\nPresencia (de mayor a menor):");
    console.log("1) parentesis ()");
    console.log("2) Multiplicacion, Division, Modulo *, /, %");
    console.log("3) Suma, Resta +, -");
    console.log("\nEjemplo:");
    
    let a = 10, b = 3;
    console.log(`A = ${a}, B = ${b}`);
    console.log(`A + B = ${a + b}`);
    console.log(`A - B = ${a - b}`);
    console.log(`A * B = ${a * b}`);
    console.log(`A / B = ${a / b}`);
    console.log(`A % B = ${a % b}`);
    console.log(`(A + B) * B = ${(a + b) * b}`);
    let x = 5;
    x += 2; // 7
    console.log(`X = 5; X += 2; => X = ${x}`);
};