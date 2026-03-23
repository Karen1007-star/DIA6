// // 🧪 EJERCICIO 1
// console.log("Hola Karen");

// //🧪 EJERCICIO 2
// function ejercicio2(nombre){
//     console.log(`Hola ${nombre}`);
// }
// ejercicio2("Juan")

// //🧪 EJERCICIO 3
// const fs = require("fs")
// fs.writeFile("mensaje.txt", "Esto aprendiendo NODE",(error)=>{
//     if(error){
//         console.log(error);
//         return
//     }
//     console.log("Archivo creaado");
// })

// // 🧪 EJERCICIO 4
// const fs2= require("fs")
// fs2.readFile("mensaje.txt", "utf-8",(error,data)=> {
//     console.log(data);
// })


// //REFUERZO:
// // 1. Crea archivo usuarios.txt
// const fs1= require("fs")
// fs1.writeFile("usuarios.txt","Karen, Luis, Ana",(error)=>{
//     fs1.readFile("usuarios.txt","utf8",(error,data)=>{
//         if(error){
//             console.log(error);
//             return
//         }
//         let separado = data.split(" ")
//         console.log(`Hola ${separado[0]}`);
//         console.log(`Hola ${separado[1]}`);
//         console.log(`Hola ${separado[2]}`);        
//     })
// })

// //🚀 AHORA SÍ (NIVEL 2)
// const http = require("http")
// const server= http.createServer((req,res)=>{
//     // res.end("servidor funcionando")
//     if (req.url === "/"){
//         res.end("INICIO")
//     }else if(req.url === "/hola"){
//         res.end("Hola Karen")
//     }else{
//         res.end("ruta no encontrada")
//     }
// })

// server.listen(3000,()=>{
//     console.log("servidor en http://localhost:3000");
// })


// 🧪 EJERCICIO FINAL NIVEL 2

// let http = require("http")
// const servidor=http.createServer((req,res)=>{
//     const url = new URL(req.url, "http://localhost:3000");
//     if(url.pathname==="/"){
//         res.end("Inicio")
//     }else if(url.pathname==="/hola"){
//         res.end("Hola Mundo")
//     }else if(url.pathname === "/usuario"){
//         const nombre= url.searchParams.get("nombre")
//         res.end(`Hola ${nombre}`)
//     }else{
//         res.end(`Ruta no encontrada`)
//     }
// })

// servidor.listen(3000,()=>{
//     console.log("servidor escuchando");
// })

// 🔹 1. Ruta + query

// const http= require("http")

// const servidor = http.createServer((req,res)=>{
//     const url = new URL(req.url,"http://localhost:3000")

//     if(url.pathname===`/producto`){
//         const item=url.searchParams.get('item')
//         res.end(`Producto: ${item}`)
//     }else if(url.pathname===`/saludo`){
//         const nombre = url.searchParams.get('nombre');
//         const edad = url.searchParams.get('edad')
//         res.end(`Hola ${nombre} tienes ${edad} años`)
//     }else {
//         res.end("Ruta no encontrada");
//     }
// })

// servidor.listen(3000,()=>{
//     console.log(`Servidor corriendo`);
// })

// // 🧪 MINI EXAMEN

// const http = require("http")
// const servidor = http.createServer((req,res)=>{
//     const ruta = new URL (req.url,"http://localhost:3000")
//     if(ruta.pathname === "/"){
//         res.end("Bienvenido al sistema");
//     }else if(ruta.pathname==="/usuario"){
//         const nombre = ruta.searchParams.get('nombre')
//         const edad = ruta.searchParams.get('edad')
//         if (!nombre || !edad) {
//             res.end("Faltan datos");
//             return;
//         }
//         res.end(`Usuario: ${nombre} - Edad: ${edad}`)
//     }else if(ruta.pathname==="/producto"){
//         const item = ruta.searchParams.get('item')
//         const precio = ruta.searchParams.get('precio')
//         res.end(`El ${item} cuesta ${precio} soles`)
//     }
// })

// servidor.listen(3000,()=>{
//     console.log("ESCUCHANDO");
// })

/////////////////////////////////////////// express

// const expre = require ("express")
// const app = expre()

// app.get("/", (req,res)=>{
//     res.send("Bienvenido al sistema")
// });
// app.get("/hola",(req,res)=>{
//     res.send("Hola Karen")
// })
// app.get("/usuarios",(req,res)=>{
//     const nombre = req.query.nombre;
//     const edad = req.query.edad;
//     res.send(`Usuario: ${nombre} - edad:${edad}`)
// })
// app.get("/producto",(req,res)=>{
//     const item = req.query.item;
//     const precio = req.query.precio;
//     res.send(`${item} cuesta S/.${precio}`)
// })

// app.listen(3000,()=>{
//     console.log("Servidor en http://localhost:3000");
// })

//////////////////////////////////////////// EXPRESS
// const expresito = require("express")
// const ruta = expresito()

// ruta.get("/",(req,res)=>{
//     res.send("BienVenIDa")
// })

// ruta.get("/usuario/:nombre/:edad",(req,res)=>{
//     const {nombre,edad}=req.params
//     if(!nombre || !edad) return res.send("NO hay datos");
//     res.send(`Mi nombre es ${nombre} y mi edad ${edad} años`)
// })
// ruta.get("/producto",(req,res)=>{
//     const {item,precio}=req.query
//     if(!item || !precio) return res.send("NO hay datos");
//     res.send(`${item} cuesta ${precio}`)
// })
// ruta.use((req, res) => {
//     res.status(404).send("Ruta no encontrada");
// });

// ruta.listen(3000,()=>{
//     console.log("Escuchando 3000000 ");
// })


///////////// 🧪 Recomendación antes de seguir - JSON
const expresito = require("express")
const fs = require("fs");

const rutita = expresito();
rutita.use(expresito.json()) // ESTO ES middleware

rutita.get("/",(req,res)=>{
    res.send("bienvidos")
})

rutita.get("/usuarios", (req,res)=>{
    fs.readFile("./usuarios.json", "utf-8",(error,data)=>{
        if(error) {
            return res.status(500).json({error: "Error leyendo archivo"})
        }
        const usuarios = JSON.parse(data)
        res.status(200).json(usuarios)
    })
})

rutita.listen(3000,()=>{
    console.log("escuchando");
})












