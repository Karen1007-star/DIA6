const http=require("http")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("Hola, este es mi primer servidor NODE")
})

server.listen(3000,()=>{
    console.log("servidor escuchando en el puerto 3000");
})