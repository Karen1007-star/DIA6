//1 - Crea un objeto que cuente cuántos usuarios hay por ciudad.
function contadorCiudad(arr){
    return arr.reduce((acum,valor)=>{
        !acum[valor.city] ? acum[valor.city]=1 : acum[valor.city]++
        return acum
    },{})
}

//2 - Crea un objeto que sume los totales por usuario.
function sumaTotal(arr){
    return arr.reduce((acum,valor)=>{
        !acum[valor.user] ? acum[valor.user]=valor.total : acum[valor.user]+= valor.total
        return acum
    },{})
}

// 3- contador independiente
function createCounter(){
    let count=0
    return function(){
        count++
    }
}

// 4 - Crea un cache de resultados usando closure:

function cache(fn){
    if(!fn) {
       return    
    }
}

//5
// const user = { 
//     name: "Ana",
//     greet(){
//         return `Hola ${this.name}`
//     }
// }

// greet.call(user)
// const boundGreet = user.greet.bind(user)









//1 - contadores
function createCounter(step){
    let count=0
    return function(){
       return count += step
    }
}

// 2 cache
function cache(fn){
    let variable = {}
    return function(x){
        if(variable[x]!=undefined) return variable[x]
        const resultado = fn(x)
        variable[x]= resultado
        return resultado 
    }
}

//3
const counterObj = {
  count: 0,
  increment() {
    this.count++
    return this.count
  }
}

let boundIncrement = counterObj.increment.bind(counterObj)
boundIncrement()

//4
const user={
    name: this.name,
    greet(){
        console.log(`hola ${this.name}`)
    }
}
const greetAna = makeGreeter("Ana")
greetAna("Hola") // Hola, Ana










// VIENDO LO QUE FALTA
function cache2(fn){
    let caja={}
    return function(x){
        if(caja[x]!=undefined) return caja[x]
        let resuel = fn(x)
        caja[x]=resuel
        return resuel
    }
}

function makeGreeter2(name){
    return{
        name,
        greet(){
            console.log(`Hola ${this.name}`)
        }
    }
}

const llamada1 = makeGreeter2("gustavo")
let makeGreeter3 = llamada1.greet.bind(llamada1)
makeGreeter3()

//🔹 Mini set avanzado Día 2
// Ejercicio 1 — Cache multi-argumentos
function cacheMulti(fn){
    let caja={}
    return function(...x){
        const key = x.join(",")
        if(caja[key]!=undefined) return caja[key]
        let resuel = fn(x)
        caja[key]=resuel
        return resuel
    }
}

function createCounter3(inicial){
    let resultado=0
    return function(){
        resultado+=inicial
        return resultado
    }
}

function makeGreeter3(name){
    return{
        name,
        greet(saludo){
            console.log(`${saludo}, ${name}`)
        }
    }
}

const userAna = makeGreeter("Ana")
const greetFn = userAna.greet.bind(userAna)
greetFn("Hola") // Hola, Ana

function makeCachedCounter(step){
    
}