function task1() {
  return new Promise(resolve => {
    setTimeout(() => resolve(1), 1000);
  });
}
function task2() {
  return new Promise((res,rej) => {
    setTimeout(() => rej(2), 2000);
  });
}
function task3() {
  return new Promise(resolve => {
    setTimeout(() => resolve(3), 1500);
  });
}

Promise.all([task1,task2,task3])
.then((values) => {
  console.log(values);
});

function saludar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola");
    }, 1000);
  });
}

saludar()
.then((m)=>console.log(m))
.catch((e)=>console.log(e))


verificar(15)
.then((m)=>console.log(m))
.catch((error)=>console.log(error))

verificar(5)
.then((m)=>console.log(m))
.catch((error)=>console.log(error))

function verificar(numero) {
  return new Promise((resolve, reject) => {
    if (numero > 10) {
      resolve("Es mayor a 10");
    } else {
      reject("Es menor o igual a 10");
    }
  });
}

async function test(numero){
    try {
        let num = await verificar(numero)
        console.log(num)
    } catch (error) {
        console.log(error);
    }
}
test(14)

function tarea(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Tarea ${id}`);
    }, 1000);
  });
}

Promise.all([tarea(12),tarea(13),tarea(14)])
.then((m)=>console.log(m))
.catch((e)=>console.log(e))

async function test2(id){
    try {
        let num = await tarea(id)
        let num2 = await tarea(id)
        let num3 = await tarea(id)
        console.log(num)
        console.log(num2)
        console.log(num3)
    } catch (error) {
        console.log(error);
    }
}
test2(14)

async function test2() {
  try {
    let a = await tarea(1);
    let b = await tarea(2);
    let c = await tarea(3);

    console.log(a, b, c);
  } catch (error) {
    console.log(error);
  }
}

function tarea(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 2) reject("Error en 2");
      else resolve(`Tarea ${id}`);
    }, 1000);
  });
}

Promise.allSettled([tarea(1),tarea(2),tarea(3),tarea(4)])
.then((m)=>console.log(m))
.catch((e)=>console.log(e))

//////////////////////INTERVALOS
console.log("Inicio1");

setTimeout(() => {
  console.log("Timeout ejecutado1");
}, 2000);

console.log("Fin1");
///////////////////////////77
console.log("Inicio2");

setTimeout(() => {
  console.log("Timeout ejecutado2");
}, 2000);

console.log("Inicio3");

setImmediate(() => {
  console.log("Inmediato3");
});

console.log("Fin3");

const tiempos = [1000, 500, 2000];
for(let i of tiempos){
    await setTimeout(() => {
         tiempos.map((t)=>{
            console.log(i.t);
        })
    }, 0);
}


const { log } = require("console");
///////////79////////777
let fs = require("fs")
    fs.readFile((error,data)=>{
        if(data){
            console.log(data);
        }else{
            console.log(error);
        }
    })
    fetch("usuarios")
    .then(res=>res.json())
    .then(respuesta=>console.log(respuesta))

    ///// ⏱ Ejercicio 1 – Serie (uno después del otro)

function esperar(ms) {
  return new Promise(res => setTimeout(res, ms));
}
async function ejecutarSerie() {
  for (let t of tiempos) {
    await esperar(t);   // espera cada uno
    console.log(t);
  }
}

ejecutarSerie();

Promise.all(tiempos.map((t)=>{
   console.log(t);
}))

/////////////////////////////////////////////////////77

const numeros = [1,2,3,4,5]

function delay(num){
    return new Promise((res,rej)=>setTimeout(()=>res(num*2),1000))
}
async function resultadoNum() {
        for(let i of numeros){
            const res = await delay(i);
            console.log(res);
        }    
}
resultadoNum()


////////////////////////////////////////////////////////////////77777777
const tareas = [1000, 2000, 500];

function tarea(ms) {
  return new Promise(res => setTimeout(() => res(`Tarea ${ms}`), ms));
}

async function resultadoTarea(){
    for(let i of tareas){
        const res = await tarea(i);
        console.log(res);
    }
    console.log("Fin");
    
}
resultadoTarea()

////////////////////////////////////////////////////////////
const usuarios = [1, 2, 3];

function fetchUsuario(id) {
  return new Promise(res => setTimeout(() =>{
    res({ id, nombre: "User " + id })
  },id * 500));
}

async function fetchUsuarioResultado() {
  const resultados = await Promise.all
  (usuarios.map(async (id) => {
      const user = await fetchUsuario(id);
      return user.nombre;
    }))
}

////////////////////////////////////////////////////
const datos = [1, 2, 3];

function proceso(n) {
  return new Promise(res => setTimeout(() => res(n + 10), 1000));
}

async function procesoResultado() {
    for(let i of datos){
        let res = await proceso(i)
        console.log(res);
    }
}
procesoResultado()

//////////////////////////// Ejercicio 2 – Paralelo básico
const datos1 = [1, 2, 3];

function proceso1(n) {
  return new Promise(res => setTimeout(() => res(n * 3), 1000));
}

async function proceso1Resultados() {
   let resultados= await Promise.all(datos1.map(async (i)=>{
        return await proceso1(i)
    }))
    console.log(resultados);
}
proceso1Resultados()

///////////////////////////////////////// Ejercicio 3 – Error clásico (map + async)
const ids = [1, 2, 3];

function fetchData(id) {
  return new Promise(res => setTimeout(() => res(`Data ${id}`), 1000));
}

async function fetchDataResultado() {
    Promise.all(ids.map(async (i)=>{
        let res = await fetchData(i)
        console.log(res)
    }))
}
fetchDataResultado()

//////////////////////////////////////////////////// Ejercicio 4 – Mezcla (nivel real)
const tiempos1 = [1000, 500];

function esperar1(ms) {
  return new Promise(res => setTimeout(() => res(ms), ms));
}

async function esperar1Respuesta() {
    for(let i of tiempos1){
        let res = await esperar1(i)
        console.log(res);
    }

    let respuestitas = await Promise.all(tiempos1.map(async(i)=> esperar1(i)))
    console.log(respuestitas);
}

esperar1Respuesta()


///////////////////////////////////////////////////////777
function contador(){
    let count=0
    return function(){
        return count++
    }
}

const con = contador()
con()

/////////////////////////////////////////////////////////////
function esperar(ms){
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(ms)
        },ms*1000)
    })
}
async function esperarR(ms) {
    try {
        let res = await esperar(ms)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
esperarR(1)


///////////// Usa Promise.all con [1000,500,1500] para mostrar un array de resultados en consola paralelo.
let times = [1000,500,1500]

Promise.all(times.map(async(i)=>{
    let res = await i;
    console.log(res);
}))

/// Usa for...of + await con los mismos tiempos para mostrarlos en serie, uno tras otro.
async function result(){
    for(let i of times){
        let res = await esperar(i)
        console.log(res);
    }
    console.log("Serie completa");
}

result();