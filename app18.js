//1 - Crea un objeto que cuente cuántos usuarios hay por ciudad.
function contadorCiudad(arr){
    return arr.reduce((acum,valor)=>{
        !acum[valor.city] ? acum[valor.city]=1 : acum[valor.city]++
        return acum
    },{})
}

//2 - Crea un objeto que sume los totales por usuario.
function sumaTotal(arr){
    return arr.reduce((acum,valor)=>{
        !acum[valor.user] ? acum[valor.user]=valor.total : acum[valor.user]+= valor.total
        return acum
    },{})
}