const readline = require("readline-sync");

let nombre = readline.question("¿Cuál es tu nombre? ");
let edad = Number(readline.question("¿Cuántos años tienes? "));
let notaUsuario = Number(readline.question("¿Qué calificación obtuviste en tu último examen? "));

let edadCompanero = 20;
let notaCompanero = 75;

let edadMayorDeEdad = 19;
let esAdulto = edad >= edadMayorDeEdad;
let aproboExamen = notaUsuario >= 80;
let esMayorQueCompanero = edad > edadCompanero;
let esNotaMayorQueCompanero = notaUsuario > notaCompanero;

console.log("\nHola, " + nombre);
console.log("Tienes " + edad + " años, ¿eres mayor de edad? " + esAdulto);
console.log("Tu calificación es " + notaUsuario + ", ¿aprobaste el examen? " + aproboExamen);
console.log("La edad de tu compañero es " + edadCompanero + ", ¿eres mayor que tu compañero? " + esMayorQueCompanero);
console.log("Tu calificación es " + notaUsuario + ", la de tu compañero es " + notaCompanero + ". ¿Tu calificación es mayor que la de tu compañero? " + esNotaMayorQueCompanero);
