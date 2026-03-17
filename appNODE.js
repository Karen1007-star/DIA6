console.log("Hola desde Node 🚀")
const fs = require("fs")
fs.readFile("Data.txt", "utf8", (err,data)=>{
    if(err){
        console.log("Error: ",err)
        return
    }
    console.log("Contenido: ", data)
    ////////////////////////////////////////
    let palabras = data.split(" ")
    let total = palabras.length
    console.log("El archivo tiene " + total + " palabras")
})