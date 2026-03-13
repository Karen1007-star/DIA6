//1//
function sumNested(arr){
    let acum=0
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            acum+=sumNested(arr[i])
        }else{
            acum+=arr[i]
        }
    }
    return acum
}

//2//
function flattenOneLevel(arr2){
    let nuevoArrayPlano=[]
    for(let i=0; i<arr2.length; i++){
        if(Array.isArray(arr2[i])){
            nuevoArrayPlano=nuevoArrayPlano.concat(flattenOneLevel(arr2[i]))
        }else{
            nuevoArrayPlano.push(arr2[i])
        }
    }
    return nuevoArrayPlano
}

//3//
function flattenDeep(arr2){
    let nuevoArrayPlano=[]
    for(let i=0; i<arr2.length; i++){
        if(Array.isArray(arr2[i])){
            nuevoArrayPlano=nuevoArrayPlano.concat(flattenDeep(arr2[i]))
        }else{
            nuevoArrayPlano.push(arr2[i])
        }
    }
    return nuevoArrayPlano
}

//4//
function rotate(arr3,n){
    let corte = arr3.slice(-n)
    return (corte.concat(arr3.slice(0,arr3.length-n)))
}

//5//
function uniqueNumbers(arr4){
    let contador=[]
    let conObj={}
    for(let dig of arr4){
        if(!conObj[dig]){
            conObj[dig]=1
        }else{
            conObj[dig]++
        }
    }
    for(let key of Object.keys(conObj)){
        if(conObj[key]==1){
            contador.push(Number(key))
        }
    }
    return contador
}


//7//
function sumFlatten(arr6) {
    let nuevoArraParaSumar=[]
    let acum=0
    for(let i=0; i<arr6.length; i++){
        if(Array.isArray(arr6[i])){
            acum+=sumFlatten(arr6[i])
        }else{
            acum+=arr6[i]
        }
    }
    return acum
}