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


///////////79////////777
let fs = require("fs")
    fs.readFile((error,data)=>{
        if(data){
            console.log(data);
        }else{
            console.log(error);
        }
    })