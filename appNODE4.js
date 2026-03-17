let fs=require("fs")
fs.readFile("archivo2.txt","utf8",(error,data)=>{
    if(error){
        console.log(`da error`, error)
        return
    }else{
        console.log(`ARCHIVO: \n`,data)
    }
    let palBuscada = "Node"
    let conteo = data.split(/\s+/).filter((a)=>a===palBuscada).length
    console.log(`La palabra 'Node' aparece ${conteo} veces`);
})

const evento=require("events")
const emitir=new evento()

emitir.on("saludo", ()=>{
    console.log("Hola con evento");
})
emitir.emit("saludo")