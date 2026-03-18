// 🎯 Script completo:
// Leer archivo
let fs = require("fs")
fs.readFile("archivo4.txt","utf8",(error, data)=>{
    if(error){
        console.log("Mostrar errores", error);
        return
    }
        console.log(`Archivo: \n ${data}`)
        // Contar:
        // palabras
        let contarP=data.split(/\s+/).length
        console.log(`Existen ${contarP} palabras`)
        // líneas
        let contarLineas=data.split(/\r?\n/).length
        console.log(`Extisten ${contarLineas} Lineas`)
        // caracteres
        let contarCaracteres=data.replaceAll(" ","").split("").length
        console.log(`Extisten ${contarCaracteres} contarCaracteres`)

        let resultado = 
        `Palabras: ${contarP}
        Lineas: ${contarLineas}
        Caracteres: ${contarCaracteres}`
})

// Emitir evento con resultados
let emitirEvento = require("events")
const emitir = new emitirEvento()
emitir.on("resultado",(nuevo)=>{
    console.log("EMITIR DESDE EVENTO", nuevo)
})
emitir.emit("resultado",resultado)

// Crear archivo resultado.txt con todo
fs.writeFile("resultado.txt",resultado,(error)=>{
    if(error){
        console.log("salio error", error);
        return
    }
        console.log("Archivo resultado.txt creado ✅")
})