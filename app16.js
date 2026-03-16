// 1️⃣ Eliminar duplicados
function eliminarDu(arr){
    return arr.reduce((acum,valor)=>{
        if(!acum.includes(valor)){
            acum.push(valor)
        }
        return acum
    },[])
}

// 2️⃣ Sumar precios
function sumarPrecios(arr){
     return arr.reduce((acum,valor)=>acum+valor.price,0)
}

//3️⃣ Agrupar por propiedad
function usuariosP(arr){
    return arr.reduce((acum,valor)=>{
        if(!acum[valor.city]){
            acum[valor.city]=[]
        }
            acum[valor.city].push(valor.name)
            return acum
    },{})
}




/// contar elementos
function contarElementos(arr){
   return arr.reduce((acum,valor)=>(acum[valor] = (acum[valor] || 0)+1, acum),{})
}

// Agrupar numeros pares e impares
function parImpar(arr){
    return arr.reduce((acum,numero)=>{
        numero%2==0 ? acum["par"].push(numero) : acum["impar"].push(numero)
        return acum
    },{ par: [], impar: [] })
}

//Por categorias
function categoriasP(arr){
    return arr.reduce((acum,valor)=>{
        !acum[valor.category] ? acum[valor.category]=[] : ""
        acum[valor.category].push(valor.name)
        return acum 
    },{})
}

//ejercicio final
function ordenesNuevas(arr){
    return arr.reduce((acum,valor)=>{
        !acum[valor.user] ? acum[valor.user]=[] : ""
        acum[valor.user].push(valor.product)
        return acum
    },{})
}