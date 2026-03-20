// const { log } = require("node:console");

// const getUser = () => new Promise(r => setTimeout(() => r("User"), 1000));
// const getPosts = () => new Promise(r => setTimeout(() => r("Posts"), 1500));
// const getComments = () => new Promise(r => setTimeout(() => r("Comments"), 500));

// const getPosts = (user) => new Promise(r => setTimeout(() => r("User"), 1000));

let arr = [5, 6, 1, 4, 2]

    function ordenamiento(arr){
        let aux;
        for(let i = 0; i < arr.length; i++){         // recorre todo
            for(let j = 0; j < arr.length - 1 - i; j++){ // recorre desde 0 hasta el final
                if(arr[j] > arr[j+1]){               // si el actual es mayor que el siguiente
                    aux = arr[j];                    // intercambiamos
                    arr[j] = arr[j+1];
                    arr[j+1] = aux;
                }
            }
        }
        console.log(arr);
    }

    ////////////////////// NUMERO MAS GRANDE
    function mayor(arr){
        let aux = arr[0]
        for(let i=1; i<arr.length; i++){
            if(aux<arr[i]){
                aux=arr[i]
            }
        }
        console.log(aux);
        
    }

    //////////////////////////// PRIMO
    function primo(n){
        if(n <= 1) return "No es primo";
        let can=0
        for(let i=1; i<=n; i++){
            if(n%i==0){
                can++
                console.log(can);
            }
        }
        return (can===2) ? "Es primo" : "No es primo"
    }