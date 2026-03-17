const nombre="Karen"
console.log(`hola, ${nombre}, desde node`)

const fs=require("fs");
fs.readFile("archivo.txt","utf8",(err,data)=>{
    if(err){
        console.log("te equivocaste")
    }
        console.log(data)
/////////////MODIFICACIONES EN JS/////////
let palabra=data.split(" ")
let total = palabra.length
console.log(`el archivo tiene ${total} palabras`)

let lineas = data.split("\n")
let totalLineas = lineas.length
console.log(`el archivo tiene ${totalLineas} lineas`)

//1️⃣ Contar caracteres (sin espacios)
let letras = data.replaceAll(" ","").split("")
let totalCaracteres = letras.length
console.log(`el archivo tiene ${totalCaracteres} caracteres`)

//2️⃣ Buscar una palabra específica
let palabraBuscada = "NODE"
let palabras = data.split(/\s+/) // separa por espacios o saltos de línea
let conteo = palabras.filter(p => p === palabraBuscada).length
console.log(`el archivo tiene ${palabraBuscada}, ${conteo} nodes`)

//3️⃣ Reemplazar texto
let textoReemplazado = data.replaceAll("Node","JavaScript")
console.log("Texto reemplazado:\n", textoReemplazado)
})

//4️⃣ Crear un archivo nuevo
const fs1= require("fs");
fs1.writeFile("nuevo.txt","utf8",(data,error)=>{
    if(error){
        console.log("ERROCITO")
    }
    if(data){
        console.log("CORRECTO:",data);
    }
})

//5️⃣ Agregar texto a un archivo existente
fs1.appendFile("Aprendiendo Node")