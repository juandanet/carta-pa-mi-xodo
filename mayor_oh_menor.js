const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});



rl.question("Oye mi rey, ¿cuantos años tienes? : ", function(edad) { 
    if (edad >= 18){
        console.log("eres mayor de edad, vamos por unas perritas mi papacho. " );
 } else {
        console.log("eres menor de edad:(, no tienes derecho a puticas")
    }
    rl.close();
});



