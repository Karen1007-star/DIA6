    let fs = require("fs")
    fs.readFile("archivo2.txt","utf8",(error,data)=>{
        if(error){
            console.log("error: ",error)
        }else{
            console.log("ARCHVIO: ",data)
        }
        let nuevoTexto = data.replaceAll("Node","JavaScript")
        console.log("Texto modificado:\n", nuevoTexto)
        ///////////////////////////// MODIFICAR
        fs.writeFile("nuevo3.txt",nuevoTexto,(err)=>{
            if(err){
                console.log("Error al crear archivo");
                return
            }else{
                console.log("Archivo nuevo creado correctamente:",nuevoTexto)
            }
        }) 
        
    })
// fs.writeFile(path, contenido, callback)