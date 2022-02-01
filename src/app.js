console.log("app.js")
const functions =require("./functions")

const rez = functions.makeCamelCase("Ar veikia Camel Case tikrai?")

console.log("rez===", rez);
