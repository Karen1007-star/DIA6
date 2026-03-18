const { error, log } = require("node:console")

//1
function saludar(nombre){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(nombre){
                res(`Hola ${nombre}`)
            }else{
                rej(`Nombre requerido`)
            }
        },1000)
    })
}
p1
.then((mensaje)=>console.log(mensaje))
.catch((error)=>console.log(error))

//2
function calcularEdad(anioNacimiento){
    let p2 = new Promise((res,rej)=>{
        if(typeof anioNacimiento === 'number'){
            res(2026-anioNacimiento)
        }else{
            rej("No es numero")
        }
    })
    p2
    .then((resuelto)=> console.log(resuelto))
    .catch((error)=> console.log(error))
}

// 3
function getUser(id){
    let p3 = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`id: ${id} , nombre: Ana`)
        },500)
    })
}

// PRACTICA 1 contraseña
function verificarPassword(password){
    let psw=new Promise((res,rej)=>{
        setTimeout(()=>{
            if(password=="1234"){
                res(`Acceso consedido`)
            }else{
                rej(`Acceso denegado`)
            }
        },1000)
    })
    return psw
}

verificarPassword(1234)
.then((mensaje)=>console.log(mensaje))
.catch((error)=>console.log(error))

// numero parte
function esPar(numero){
    let pro1 = new Promise((res,rej)=>{
        if(typeof numero == "number"){
            if(numero%2==0){
                res(`Es par`)
            }else{
                rej(`Es impar`)
            }
        }else{
            rej(`No es numero`)
        }
    })
    return pro1
}

esPar()
.then((mensaje)=>console.log(mensaje))
.catch((error)=>console.log(error))

function sumar5(numero){
  return new Promise((res, rej) => {
    if(typeof numero === "number") res(numero + 5)
    else rej("No es número")
  })
}

function multiplicar2(numero){
  return new Promise((res, rej) => {
    if(typeof numero === "number") res(numero * 2)
    else rej("No es número")
  })
}

sumar5(10)
  .then(resultado => {
    console.log(resultado);
    return resultado
  })
  .then(resultadoFinal => {
    console.log(resultadoFinal) // debería mostrar 30
  })
  .catch(error => console.log(error))


    function saludo(nombre){
    return new Promise((res, rej) => {
        if(nombre) res("Hola " + nombre)
        else rej("Nombre requerido")
    })
    }

    function despedida(nombre){
    return new Promise((res, rej) => {
        if(nombre) res("Adiós " + nombre)
        else rej("Nombre requerido")
    })
    }

saludo("Ana")
  .then(mensaje => {
    console.log(mensaje);
    let mensaje2 = "Ana"
    return despedida(mensaje2)     
  })
  .then(mensajeFinal => console.log(mensajeFinal)) 
  .catch(error => console.log(error))
/////////////////////////////////////////////////
  function sumar10(n){
  return new Promise((res, rej) => {
    if(typeof n === "number") res(n + 10)
    else rej("No es un número")
  })
}
function multiplicar3(n){
  return new Promise((res, rej) => {
    if(typeof n === "number") res(n * 3)
    else rej("No es un número")
  })
}
function restar5(n){
  return new Promise((res, rej) => {
    if(typeof n === "number") res(n - 5)
    else rej("No es un número")
  })
}

sumar10(5)
.then(mensaje=>{
    console.log(mensaje);
    return multiplicar3(mensaje)
})
.then((mensaje)=>{
    console.log(mensaje);
    return restar5(mensaje)
})
.catch(error=>console.log(error))

//////////////////////////////////////////////////////7
function hola(nombre){
  return new Promise((res, rej) => {
    if(nombre) res("Hola " + nombre)
    else rej("Nombre requerido")
  })
}

function comoEstas(saludo){
  return new Promise((res, rej) => {
    if(saludo) res(saludo + ", ¿cómo estás?")
    else rej("No hay saludo")
  })
}

function despedida(mensaje){
  return new Promise((res, rej) => {
    if(mensaje) res(mensaje + " Adiós!")
    else rej("No hay mensaje")
  })
}

hola("Carlos")
.then((mensaje)=>{
    console.log(mensaje);
    return comoEstas(mensaje)    
})
.then((mensaje)=>{
    console.log(mensaje);
    return despedida(mensaje)
})
.then((mens)=>console.log(mens))
.catch((error)=>console.log(error))

async function hola(nombre){
    try {
        let mensaje1 = await comoEstas(nombre)
        let mensaje2 = await despedida(mensaje1)
        let mensaje3 = await console.log(mensaje2)
        console.log(mensaje3);
        
    } catch (error) {
        console.log(error)  
    }
}

/////////////////////////////////////////
function saludo(nombre){ return new Promise((res, rej)=> nombre ? res("Hola " + nombre) : rej("Nombre requerido")) }
function comoEstas(mensaje){ return new Promise((res, rej)=> mensaje ? res(mensaje + ", ¿cómo estás?") : rej("No hay saludo")) }
function despedida(mensaje){ return new Promise((res, rej)=> mensaje ? res(mensaje + " Adiós!") : rej("No hay mensaje")) }

saludo("Juan")
.then((men)=>comoEstas(men))
.then((men)=>despedida(men))
.then((men)=>console.log(men))

async function nueva (nombre){
    try {
        let men1 = await saludo(nombre)
        let men2 = await comoEstas(men1)
        let men3 = await despedida(men2)
        console.log(men1);
        console.log(men2);
        console.log(men3);
        
    } catch (error) {

    }
        
}

///////////////7 EVALUACION /////////////////77
// 🔹 Nivel 1 — Promesas básicas
function verificarNumero(num){
    return new Promise((res, rej)=>{
        if(num>0){
            res(`Es positivo`)
        }else{
            rej(`No es positivo`)
        }
    })
}

verificarNumero(12)
.then(mensaje=>console.log(mensaje))
.catch(error=>console.log(error))

// 🔹 Nivel 2 — Encadenamiento
function multiplicar10(num){
    return new Promise((res,rej)=>{
        if(num>0){
            res(num*10)
        }
    })
}
verificarNumero(12)
.then(num=>multiplicar10(num))
.then(mensaje=>console.log(mensaje))
.catch(error=>console.log(error))

// 🔹 Nivel 3 — Async/Await
async function respuesta(num){
    try {
        let men1 = await verificarNumero(num)
        let men2 = await multiplicar10(num)
        console.log(men1)
        console.log(men2)
    } catch (error) {
        console.log(error);
    }
}

// 🔹 Nivel 4 — Strings y objetos
function saludo(nombre){ return new Promise((res, rej) => nombre ? res("Hola " + nombre) : rej("Nombre requerido")) }
function despedida(nombre){ return new Promise((res, rej) => nombre ? res("Adiós " + nombre) : rej("Nombre requerido")) }

saludo("Juan")
.then((mensaje1)=>{
    console.log(mensaje1)
    const mensaje2 = mensaje1.split(" ")[1]
    return despedida(mensaje2)
})  
.then((mensajeDespedida) => {
    console.log(mensajeDespedida)            // Muestra: "Adiós Juan"
  })
.catch(error=>console.log(error))

async function convirtiendo(nombre) {
    try {
        let men1 = await saludo(nombre)
        let men2 = await despedida(nombre)
        console.log(men1);
        console.log(men2);
    } catch (error) {
        console.log(error);
    }
}
convirtiendo("Karen")
convirtiendo()
// 🔹 Nivel 5 — Array y Promise.all
const productos = [
  {nombre:"Camiseta", stock:3},
  {nombre:"Pantalón", stock:0},
  {nombre:"Gorra", stock:5}
]

function checkStock(producto){
    return new Promise((res,rej)=>{
        res()
    })
}