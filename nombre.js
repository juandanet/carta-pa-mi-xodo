const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question ("oye, dime cual es tu nombre papu: ", function(nombre) {
    console.log("hola guapo " + nombre);
rl.close();

});