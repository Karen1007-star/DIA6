    const emitirEvento = require("events")
    let fs = require("fs")
    
    fs.readFile("archivo4.txt","utf8",(error,data)=>{
        if(error){
            console.log("Cuidado con el error", error);
            return
        }
        console.log("Archivo:\n", data)
    ///////////////// cuantas palabras
        let cantidad = data.split(" ").length
        console.log(`El archivo tiene: ${cantidad} palabras`);

    //////// EVENTOS ///////////
        const emitir = new emitirEvento()
        
        emitir.on("resultado", (cantidad)=>{
            console.log(`EVENTO: El archivo tiene: ${cantidad} palabras`);
        })

        emitir.emit("resultado", cantidad)
    })