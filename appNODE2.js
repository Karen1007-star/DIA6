let fs = require("fs")
//1
fs.readFile("archivo2.txt","utf8",(error,data)=>{
    if(error){
        console.log("Error", error)
    }else{
        console.log("TEXTO: ", data)
    }
})

