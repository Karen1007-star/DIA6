let fs = require("fs")
fs.readFile("archivo2.txt","utf8",(error,data)=>{
    if(error){
        console.log("error", error)
    }else{
        console.log("Dato", data)
    }

    let palabras = data.split(" ")
    let conteoPalabras = palabras.length
    console.log(`el archivo tiene ${conteoPalabras} palabras`)
    
    let lineas = data.split("\n")
    let conteoLineas = lineas.length
    console.log(`el archivo tiene ${conteoLineas} lineas`)
})