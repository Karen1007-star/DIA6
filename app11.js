//1// contar palabras
function countWords(cadena){
    let palabras=cadena.split(" ")
    let nuevoObj={}
    for(let palabra of palabras){
        if(!nuevoObj[palabra]){
            nuevoObj[palabra]=1
        }else{
            nuevoObj[palabra]++
        }
    }
    return nuevoObj
}

//2// Eliminar duplicados
function removeDuplicates(arr1){
    let arrayNUevo=[]
    let objContador={}
    for(let i of arr1){
        if(!objContador[i]){
            objContador[i]=1
        }else{
            objContador[i]++
        }
    }
    for(let i of Object.keys(objContador)){
            arrayNUevo.push(Number(i))
    }
    return arrayNUevo
}

//3// Sumar por propiedad

function sumarPropiedad(arr2){
    let objSuma={}
    let nuevoA=[]
    let acum=0
    for(let i of arr2){
        if(!nuevoA[i]){
            nuevoA[i]
        }else{
            acum+=nuevoA[i]
        }
    }
}

//4// Agrupar por edad
function groupByAge(arr3){
    let grup={}
    let acum=[]
    for(let i of arr3){
        if(!grup[i]){
            grup[i]
        }else{
            acum.push(grup[i])
        }
    }
    return acum
}

//5// Encontrar pares consecutivos
function findPairs(arr4){
    let arrayNue=[]
    for(let i=0; i<arr4.length; i++){
        for(let j=1; j<arr4.length; j++){
            if(arr4[i]+1==arr4[j]){
                arrayNue.push([arr4[i],arr4[j]])
            }
        }
    }
    return arrayNue
}
//6// Palabra más larga
function longestWord(oracion){
    let palabras=oracion.split(" ")
    let mayor=palabras[0]
    for(let i=1; i<palabras.length; i++){
        if(mayor.length < palabras[i].length){
            mayor=palabras[i]
        }
    }
    return mayor
}

//7// Aplanar array
function flatten(arr5){
    let arrNuevito=[]
    for(let i=0; i<arr5.length; i++){
        if(Array.isArray(arr5[i])){
            arrNuevito=arrNuevito.concat(flatten(arr5[i]))
        }else{
            arrNuevito.push(arr5[i])
        }
    }
    return arrNuevito
}

//8// Top 2 números más grandes
function topTwo(arr6){
   let orden = arr6.sort((a,b)=>a-b)
   return orden.slice(-2)
}

//9// Pipeline de arrays
function processNumbers(arr7){
    return arr7.filter((num)=>num%2==0).map((num)=>num*3).reduce((acum,valor)=>acum+valor,0)
}

//10// Closure contador avanzado
function createCounter(){
    let count=0
    let value=0;
    function increment(){
        value = count++
    }
    function decrement(){
         value = count--
    }
    return value
}
