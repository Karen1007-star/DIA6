    let fs = require("fs")
    let emitirEven = require("events");
const console = require("console");
    let emitir = new emitirEven()

    //evento
    emitir.on("conteo",(resumen)=>{
        console.log(resumen);
    })

    fs.readFile("archivo4.txt","utf8",(error,data)=>{
        if(error){
            console.log("cuidado: ",error);
            return
        }
            console.log("Archivo: \n", data);
            // contar
            let palabras=data.split(/\s+/).length
            let lineas = data.split(/\r?\n/).length
            let caracteres = data.replaceAll(" ","").split("").length
            let resumen = `palabras: ${palabras}, lineas: ${lineas} y caracteres: ${caracteres}`
            
            emitir.emit("conteo",resumen)

            //Guardar el resultado en resultado.txt
            fs.writeFile("resultado.txt",resumen,(error)=>{
                if(error){
                    console.log("Error", error);
                    return
                }
                    console.log("Archivo creado de resultado");
            })
    })


    function aplanador(arr){
        let arr2 =[]
    }

    function contadorPrivado(contador){
        return function(numero){
            return numero+=contador
        }
    }

    // COnvertido en async
    async function step1() {
    return await Promise.resolve(5);
    }

    async function step2(num) {
    return await Promise.resolve(num * 2);
    }








    // promesa
    let p = new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("HOla MUndo");
        },500)
    }) 
    p.then((res)=>`se resolvio: ${res}`)

    // convirtiendo
    async ()=>{
        await setTimeout(()=>{
            console.log("HOla MUndo");
        },500)
    }



//     🔹 5️⃣ Ejercicio práctico para ti
// Crea una Promise que:
// Espere 500ms
// Luego devuelva "Hola mundo" si todo va bien
// O "Falló" si algo sale mal
// Imprímelo usando .then y .catch

const pro1 = new Promise((res,rej)=>{
    setTimeout(() => {
        if(true){
            res("Hola Mundo")
        }else{
            rej("Fallo")
        }
    }, 1000);
})
pro1.
then((respuesta)=>console.log(respuesta))
.then((error)=> console.log(error))

// Ejercicio 1 — Promise simple
const pro2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("ejercicio1 completado")
    },500)
})
pro2
.then((resuelto)=>console.log(resuelto))

// Ejercicio 2
const pro3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        if(true){
            res("Bien!")
        }else{
            rej("Algo falló")
        }
    },1000)
})

pro3
.then((resultado)=>console.log(resultado))
.catch((error)=>console.error(error))

//Encadenamiento de Promises
// const p1=new Promise((res,rej)=>{
//     setTimeout(() => {
//         res(5)
//     }, 500);
// })

// const p2=new Promise((res,rej)=>{
//     let num
//     res(num*2)
// })

// p1.then(p2).then(console.log)
const p1 = new Promise((res, rej) => {
    setTimeout(() => res(5), 500);
});

function p2(num) {
    return new Promise((res, rej) => {
        res(num * 2);
    });
}

p1
.then((resultado) => p2(resultado))
.then((final) => console.log(final)); // 10





// PROMESAS