function FizzBuzz(n){
    for(let i=1; i<n+1; i++){
        let value=i;
        (i%3==0 && i%5==0) ? value = "FizzBuzz": (i%3==0) ? value = "Fizz" : (i%5==0) ? value = "Buzz": value;
        console.log(value);
    }
} 

function reverseString1(a){
    let nuevo=""
    let arrayN=[]
    for(let i=0; i<a.length; i++){
        let value="";
        value = a[a.length - (i+1)]
        arrayN[i] = value
        nuevo = nuevo + arrayN[i]
    }
    console.log(nuevo)
}

function countLetters(a){
    let arrayLe = a.split("");
    let cuenta ={}

    for( let letra of arrayLe){
        if(cuenta[letra]){
            cuenta[letra]++
        }else{
            cuenta[letra]=1
        }
    }
    console.log(cuenta);
}

function sumaArray(n){
    let acum = 0;
    for(let i=0; i<n.length; i++){
        acum = acum + n[i]
    }
    return acum
}

function numGrande(n){
    let numero = 0;
    for(let i=0; i<n.length; i++){
        for(let j=1; j<n.length;j++){
            if(n[i]>n[j]){
                numero=n[i]
            }
        }
    }
    console.log(numero)
}