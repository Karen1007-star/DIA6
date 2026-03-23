//🏋️‍♂️ Ejercicios de Funciones y Bucles
//1️⃣ Función saludo
function saludar(nom){
    return `Hola ${nom}`
}

//2️⃣ Multiplicación
let multiplicar= (a,b)=> a*b

//3️⃣ Contar números
for(let i=1; i<16; i++){
    console.log(i);
}

//4️⃣ Suma de array
let arr1 = [5, 10, 15, 20]
function suma(arr1){
    let suma=0
    for(let i=0; i<arr1.length; i++){
        suma+=arr1[i]
    }
    return suma
}

//5️⃣ Bucles while
let i=10
while(i>=1){
    console.log(i);
    i--
}

//6️⃣ Filtrar pares
function filtrarPares(arr){
    let arr2=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0){
            arr2.push(arr[i])
        }
    }
    return arr2
}
//6️⃣ Filtrar pares con while
function filtrarPares2(arr){
    let arr2=[]
    let i=0
    while(i<arr.length){
        if(arr[i]%2===0){
            arr2.push(arr[i])
        }
        i++
    }
    return arr2
}

// 🏋️‍♂️ Ronda Avanzada: Funciones + Bucles + Arrays
// Ejercicio 1 – Suma condicional (Nivel Medio)

function sumarMayoresQue(arr, limite){
    let sum=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>limite) sum+=arr[i]
    }
    return sum
}

// Ejercicio 2 – Revertir array (Nivel Medio)
function revertirArray(arr){
    let arr2 = []
    for(let i=0; i<arr.length; i++){
        arr2.push(arr[arr.length-(1+i)])
    }
    return arr2
}

//Ejercicio 3 – Contar palabras (Nivel Medio-Difícil)
function contarPalabras(frase){
    let palabras = frase.split(" ")
    let count=0
    for(let i=0; i<palabras.length; i++){
        count++
    }
    return count
}
/// HABRA OTRA MANERA DE HACERLO SIN SPLIT???

// Ejercicio 4 – Promedio de números pares (Nivel Difícil)
function promedioPares(arr){
    let sum=0
    let count=0
    if(count === 0) return 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2===0) sum+=arr[i], count++
    }
    return sum/count
}

//Ejercicio 5 – Multiplicar elementos por índice (Nivel Difícil)
function multiplicarPorIndice(arr){
    let arr2=[]
    for(let i=0; i<arr.length; i++){
        arr2.push(arr[i]*i)
    }
    return arr2
}

// 🧠 Ronda Tipo Entrevista (Nivel Junior)
// 1️⃣ Encontrar el número mayor
function maximo(arr){
    let maxV=arr[0]
    if(arr.length === 0) return null
    for(let i=1; i<arr.length; i++){
        if(maxV<arr[i]) maxV=arr[i]
    }
    return maxV
}
//2️⃣ Detectar duplicados
function tieneDuplicados(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]==arr[j]){
            return true
            }
        }
    }
    return false
}

//3️⃣ Eliminar duplicados
function eliminarDuplicados(arr3){
    let objeN={}
    let arrNu=[]
    for(let i of arr3){
        if(!objeN[i]){
            objeN[i]=1
        }else{
            objeN[i]++
        }
    }
    for(let i of Object.keys(objeN)){
        arrNu.push(Number(i))
    }
    return arrNu
}

// 4️⃣ Contar frecuencia de elementos
function frecuencia(arr){
    let objNuevo={}
    for(let i of arr){
        if(!objNuevo[i]){
            objNuevo[i]=1
        }else{
            objNuevo[i]++
        }
    }
    return objNuevo
}

//5️⃣ Encontrar el primer número repetido
function primerRepetido(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]==arr[j]){
            return arr[i]
            }
        }
    }
    return "No hay numeros repetidos"
}

//🚀 Ronda PRO – Optimización
// 1️⃣ Detectar duplicados (Optimizado)
function tieneDuplicadosOpt(arr){
    return new Set(arr).size !== arr.length;
}

// 2️⃣ Primer número repetido (Optimizado)
function primerRepetidoOpt(arr){
    let vistos = {};
    for (let num of arr) {
        if (vistos[num]) return num;
        vistos[num] = true; // para marcar que el valor ya aparecio
    }
    return "No hay numeros repetidos";
}

// 3️⃣ Elemento único
function elementoUnico(arr){
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let num in freq) {
        if (freq[num] === 1) return Number(num);
    }
    return "No hay";
}

//4️⃣ Intersección de arrays
function interseccion(arr1, arr2){
    let set1 = new Set(arr1);
    return arr2.filter(x => set1.has(x));
}       

// 5️⃣ Dos números que suman target (CLÁSICO DE ENTREVISTA 🔥)
function dosSum(arr, target){
    let arr2=[]
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target){
                arr2.push(i,j)
            }
        }
    }
    return arr2
}
//1️⃣ Optimización de búsqueda
function primerRepetidoOptOpt(arr){
    let objVisto={}
    if(arr.length==0) return "Array vacio"
    for(let i of arr){
        if(objVisto[i]){
           return i 
        }
        objVisto[i]=true
    }
}

//2️⃣ DosSum avanzado
function dosSumTodos(arr, target){
    let nuevoObj={}
    let arr2=[]
    if(arr.length== 0) return "Array vacio"
    if(arr.some((n)=>n<0)) return "Numero negativo"
    let complemento
    for(let i=0;i<arr.length; i++){
        complemento = target - arr[i]
        if(complemento!=undefined){
            arr2.push(i,complemento[i])
        }
        nuevoObj[i] = true
    }
    return arr2
}