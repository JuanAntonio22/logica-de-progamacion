module.exports =    function() {
    console.log("Ejemplo: Asignasion");
    console.log("-------------------");
    let x = 10;
    console.log("x =", x);
    x = x + 5;// asigansion
    console.log("x = x + 5 => x =", x);
    x += 3; // asigansion compuesta
    console.log("x +=3 =>", x);
    x *= 2; // asigansion compuesta
    console.log("x *=2 =>", x);
    x -= 4; // asigansion compuesta
    console.log("x -=4 =>", x);
    x /= 3; // asigansion compuesta
    console.log("x /=3 =>", x);
    x %= 3; // asigansion compuesta
    console.log("x %=3 =>", x);
};