//1//
function countLetters(cadena){
    let objCadena={}
    for(let letra of cadena){
        if(!objCadena[letra]){
            objCadena[letra]=1
        }else{
            objCadena[letra]++
        }
    }
    return objCadena;
}

//2//
function sumEven(arr){
    let acum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            acum+=arr[i]
        }
    }
    return acum
}

//3//
function greaterThanFive(arr){
    let arr2=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>5){
            arr2.push(arr)
        }
    }
    return arr2
}

//4//
function double(arr){
    let arrDoble=[]
    for(let i=0; i<arr.length; i++){
        arrDoble.push(arr[i]*2)
    }
    return arrDoble
}

//5//
function findMax(arr){
    let mayor = arr[0]
    for(let i=1; i<arr.length; i++){
        if(mayor<arr[i]){
            mayor=arr[i]
        }
    }
    return mayor;
}

//6//
function longestWord(cadena){
    let palabras = cadena.split(" ")
    let palabraLarga=palabra[0]
    for(let letras of palabras){
        if(palabraLarga.length<letras.length){
            palabraLarga = letras
        }
    }
    return palabraLarga
}

//7//
function wordCount(oracion){
    let palabras = oracion.split(" ");
    objCantidad={}
    for(let pal of palabras){
        if(!objCantidad[pal]){
            objCantidad[pal]=1
        }else{
            objCantidad[pal]++
        }
    }
    return objCantidad
}

//8//
function rotate(arr,n){
    let arrNuevo = []
    for(let i=0; i<arr.length; i++){
            
    }
}

//9//
function isAnagram(cadena1, cadena2){
    if(cadena1.length==cadena2.length){
        cadena1.split("").forEach(element => {
            element.includes(cadena2)
        });
        return true
    }
    return false
}

//10//
function createCounter(){
    let count=0;
    return function(){
        return count++
    }
}
