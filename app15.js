// 1️⃣ Obtener usuarios únicos por id
function unicosID(users){
    objFiltrado={}
    return users.reduce((acum,valor)=>{
        acum[valor]=(acum[valor]||0)+1
        return acum
    },{})
}

//Encontrar el objeto con mayor valor
function mayorValor(products){
    let mayor=products[0]
    for(let i=0; i<products.length;i++){
        if(mayor<products[i]){
            mayor=products[i]
        }
    }
    return mayor
}
function mayorValor(products){
    return products.reduce((acum,valor)=>{
        if(valor.price<acum) valor.price=acum 
        return valor
    },valor[])
}