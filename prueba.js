const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("dime cuantos años tienes pa decirte si eres apto de meter bareta: ", function(edad) {

    if (edad >=12){
        console.log("felicidades bro, puedes coger el vicio que se encuentra en la mesa," );
    } else {
        console.log("lo siento nene, no puedes soplar aun :C " );

    }
rl.close();

});
