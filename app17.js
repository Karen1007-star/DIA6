//1
function createCounter() {
  let count=0
    return function(){
        return count++
    }
}

//2 
function cache(fn) {
  // devuelve una función que guarda resultados previos
  return function fn(valor){
     return valor
  }
}

//3
const user = {
  name: "Ana",
  greet: function() {
    // imprime "Hola, Ana"
    console.log(`Hola, ${this.name}`)
  }
}

user.greet()

// 4
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`)
}
const user = { name: "Luis" }
greet.bind(user)

// usa call y apply para imprimir "Hola, Luis" y "Hey, Luis"


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacciCacheado(n - 1) + fibonacciCacheado(n - 2);
}

const fibonacciCacheado = cache(fibonacci);