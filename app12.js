//1
function FizzBuzz(){
    let value
    let arr=[]
    for(let i=1; i<=20; i++){
        if(i%3==0 && i%5==0){
            value="FizzBuzz";
        }else if(i%3==0){
            value="Fizz";
        }else if(i%5==0){
            value="Buzz";
        }else{
            value=i;
        }
        arr.push(value)
    }
    return arr
}

//2
function sumArray(n){
    let acum=0
    for(let i=0; i<n.length; i++){
        acum+=n[i]
    }
    return acum;
}

//3
function Flatten(arr){
    let arrN=[]
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            arrN = arrN.concat(Flatten(arr[i]))
        }else{
            arrN.push(arr[i])
        }
    }
    return arrN
}

//4
function createCounter(){
    let count=0
    return{
        increment(){
            count++
        },
        
        decrement(){
            count--
        },
        
        get(){
            console.log(count)
        }
    }
}

//5
function isPalindrome(oracion){
    let oracion1 = oracion.split(" ").join("").toLowerCase()
    let oracion2=oracion.split("").reverse().join("").toLowerCase().replaceAll(" ","")
    if(oracion1==oracion2) {
        return true
    }else{
        return false
    }
}

//6
function areAnagrams(pala1, pala2){
    let pa1 = pala1.split("").sort().join("")
    let pa2 = pala2.split("").sort().join("")

    if(pa1==pa2){
        return true
    }else{
        return false
    }
}

//7
function removeDuplicates(arr){
    let objN={}
    let arrn = []
    for(let i of arr){
        if(!objN[i]){
            objN[i]=1
        }else{
            objN[i]++
        }
    }
    for(let i of Object.keys(objN)){
        arrn.push(Number(i))
    }
    return arrn
}

//8
let persona={
    constructor(nombre, edad){
        this.nombre=nombre,
        this.edad=edad
    },
    presentarse(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

//9
function delay(ms){
   new Promise((res,rej)=>{
    setTimeout(() => {
        res = console.log("hola")
    }, ms*1000);
   }).then((res)=>res)
}

//10
function fibonacci(n){
    let Arrn = []
    let arr=[0,1]
    for(let i=0; i<n; i++){
        let inicial = arr[i];
        let sigui = arr[i+1]
        arr[i+2] = arr[i] + arr[i+1]
        Arrn.push(arr[i+2])
    }
    return Arrn
}