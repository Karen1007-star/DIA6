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
    let palabra = cadena.split(" ")
    let palabraLarga=palabra[0].length
    for(let letras of palabra){
        if(palabraLarga<letras.length){
            palabraLarga = letras.length
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
    objCantidad
}

//8//
function rotate(arr){
    
}