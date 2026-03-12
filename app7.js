// Ejercicios tipo “solo pasos”
// Suma de un array [1,2,3,4] → 10
function SumaArrays(num){
    let suma=0;
    for(let i=0; i<num.length; i++){
        suma+=num[i]
    }
    return suma;
} 
// Número mayor [3,7,2,9,1] → 9
function numMayor(num){
    let mayor=0;
    for(let i=0; i<num.length; i++){
        if(num[i]>mayor){
            mayor=num[i]
        }
    }
    return mayor
}
// Contar letras "banana" → {b:1,a:3,n:2}
function contarLetras(cadena){
    let guarda={}
    for(let i of cadena){
        if(cadena[i]!=i){
            guarda[i]=1
        }else{
            guarda[i]++
        }
    }
    return guarda
}
// Invertir string "hola" → "aloh"

function invertirCadena(cadena){
    cadenaNueva=""
    for(let i=0; i<cadena.length; i++){
        let letra = cadena[cadena.length-(i+1)];
        cadenaNueva = cadenaNueva + letra
    }
    return cadenaNueva
}

// Buscar un número en array [5,8,2,9] → true si existe
function buscarNumero(arr,numero){
    for(let i=0; i<arr.length; i++){
        if(numero == arr[i]) return true
    }
    return false
}
// Acumulador con condición: sumar solo números pares [1,2,3,4] → 6
function SumaArraysCondicionado(num){
    let suma=0;
    for(let i=0; i<num.length; i++){
        if(num[i]%2==0){
            suma+=num[i]
        }
    }
    return suma;
} 
// Promedio [3,6,9] → 6
function promedio(num){
    let suma=0;
    for(let i=0; i<num.length; i++){
            suma+=num[i]  
    }
    return suma/num.length;
} 
// Flatten simple [1,[2,3]] → [1,2,3]