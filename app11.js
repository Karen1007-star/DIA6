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