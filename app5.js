//Ejercicio 1 – FizzBuzz
//Escribe una función fizzBuzz(n) que imprima números del 1 al n.

let arr = []

function fizzBuzz1(n){
    for(let i=0; i<n; i++){
        let value = i;
        if(i%3==0 && i%5==0){
            value="FizzBuzz";
        }else if(i%5==0){
            value="Buzz";
        }else if(i%3==0){
            value="Fizz"
        }else{
            value;
        }
        arr.push(value);
    }
    console.log(arr)
}

function reverseString2(str){
    let arr=[]
    let nuevostr="";
    for(let i=0; i<str.length; i++){
        let value = str[str.length -(i+1)]
        arr[i]=value;
        nuevostr = nuevostr + (arr[i]) 
    }
    console.log(nuevostr)
}

function isAnagram(str1, str2){
    let word1= str1.split("")
    let word2= str2.split("")
    if(str1.length == str2.length){
        let pal = word1.sort();
        let pal2 = word2.sort();
        let i=0;
        return pal.forEach(element => {
           if(element == pal2[i]){
            i++
           }else{
            return false
           }   
        }) ? true : false
    }else{
        return false
    }
}

let arrayn =[];
function flattenArray(arr){
    for(let i=0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flattenArray(arr[i])
        }else{
            arrayn.push(arr[i])
        }
    }
    console.log(arr)
}