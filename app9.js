//1//
function countLettersType(oracion){
    objCan={vocales: 0, consonantes: 0}
    for(let vocales of oracion){
        if(vocales.match(/[aeiou]/)){
            objCan.vocales++
        }else if(vocales.match(/[bcdfghjklmnñpqrstvwxyz]/)){
            objCan.consonantes++
        }
    }
    return objCan
}

//2//
function sumMatrix(arrArr){
    let acum=0;
    for(let i=0; i<arrArr.length; i++){
         if(!Array.isArray(arrArr[i])){
            acum+=arrArr[i]
         }else{
            acum+=sumMatrix(arrArr[i])  
         }      
    }
    return acum;
}

//3//
function flattenDeep(arrGrande){
    let arrNuevo=[]
    for(let i=0; i<arrGrande; i++){
        if(!Array.isArray(arrGrande[i])){
            arrNuevo.push(arrGrande[i])
        }else {
            flattenDeep[i]
        }
    }
    return arrNuevo
}

//4//
function filterAndMultiply(num){
    let nuevoArr=[]
    for(let i=0; i<num.length; i++){
        if(num[i]%2==0){
            nuevoArr.push(num[i]*10)
        }
    }
    return nuevoArr
}

//5//
function groupBy(arr, clave){
    let objNuevo={}
    for(let uno of arr){
        if(objNuevo[clave]==arr[uno]){
            objNuevo[clave].push(arr[uno])
        }
    }
    return objNuevo
}

//6//
function sumByIndex(arr1,arr2){
    let arraNuevo=[]
    if(arr1.length!=arr2.length) return "no se puede"
    for(let i=0; i<arr1.length; i++){
        arraNuevo.push(arr1[i]+arr2[i])
    }
    return arraNuevo
}
//7//
function uniqueNumbers(numeros){
    let objcon={}
    let nuevo=[]
    for(let num of numeros){
        if(!objcon[num]){
            objcon[num]=1
        }else{
            objcon[num]++
        }
    }
    objcon.filter((ele)=>{
        objcon[ele]==1
        nuevo.push(ele)
    })
    return nuevo
}

//8//
function reverseWords(cadena){
    let palabras = cadena.split(" ")
    return palabras.map((pal)=> pal.split("").reverse().join("")).join(" ")
}

//9//
function fizzBuzzAdvanced(){
    let arrnn50=[]
    let valor
    for(let i=1; i<51; i++){
        if(i%3==0 && i%5==0){
            valor="FizzBuzz";
        }else if(i%3==0){
            valor="Fizz";
        }else if(i%5==0){
            valor="Buzz";
        }else{
            valor=i;
        }
        arrnn50.push(valor)
    }
    return arrnn50
}

//10//
function createMultiplier(n){
    return function(numero){
        return n*numero
    }
}