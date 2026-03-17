let fs = require("fs")
fs.readFile("archivo2.txt","utf8",(error,data)=>{
    if(error){
        console.log(`se da el error ${error}`)
    }else{
        console.log(`se da el ARCHIVO ${data}`)
    }

    let sinEspacios = data.replaceAll(" ","")
    let conteo = sinEspacios.split("").length
    console.log(`Tiene ${conteo} caracteres`);
    
})