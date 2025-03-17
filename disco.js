const readline = require("readline");

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})



rl.question("oye mi bro, como estas ?, necesito que me digas cuantos años tienes aver si puedes ingresar a RED TERAZA: ", function(edad) {

    if (edad >= 18){
        console.log("bien ahi bro, cumples con la edad minima para ingresar a after party. " );
}  else {
        console.log("losiento bro. no cumples con la edad minima, mejor vete a tomar tetero, hijo de la re mil perraaaaaa. " );
}
    
    rl.close();

});
