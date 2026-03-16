//1 Eliminar duplicados
function removeDuplicates(arr){
    return [...new Set(arr)]
}
//filter
function removeDuplicates2(arr){
    let seen = {}

    return arr.filter((element)=>{
        if(seen[element]){
            return false //Si el elemento ya fue visto → false (se elimina)
        }else{
            seen[element] = true //Si no fue visto → se guarda en seen y se retorna true
            return true
        }
    })
}

//2 contado
function countItems(arr){
    return arr.reduce((acum,item)=>{
        acum[item] = (acum[item] || 0) + 1
        return acum
    },{})
}
// 3 groupBy
const users = [
 {name:"Ana", city:"Lima"},
 {name:"Luis", city:"Cusco"},
 {name:"Pedro", city:"Lima"},
 {name:"Maria", city:"Cusco"},
 {name:"Jose", city:"Piura"}
]
// {
//  Lima: [
//    {name:"Ana", city:"Lima"},
//    {name:"Pedro", city:"Lima"}   
//  ],
//  Cusco: [
//    {name:"Luis", city:"Cusco"},
//    {name:"Maria", city:"Cusco"}
//  ],
//  Piura: [
//    {name:"Jose", city:"Piura"}
//  ]
// }
function groupBy(users){
    let objA={}
    for(let i of users){
        if(!objA[i.city]){
            objA[i.city]=[]
        }
            objA[i.city].push(i)
    }
    return objA
}

//4 Encontrar máximo y mínimo
function maxMin(arrNu){
    let max=arrNu[0]
    let min=arrNu[0]
    for(let i=0;i<arrNu.length; i++){
        if(max < arrNu[i]){
            max=arrNu[i]
        }
        if(min>arrNu[i]){
            min=arrNu[i]
        }
    }
    return {"max": max, "min": min}
}

//5 Convertir array → objeto
function arrOBjeto(arr){
    let objNuevo={}
    for(let [key,value] of arr){
        objNuevo[key]=value
    }
    return objNuevo
}

//6 Sumar valores de array de objetos
function sumarValores(prod){
    let acum=0
    for(let i of prod){
        acum+=i.price
    }
    return acum
}

//7 Ordenar array de objetos
function OrdenarPersonas(arr){
    // 1️⃣ edad ascendente
    let edadA =  [...arr].sort((a,b)=> a.age-b.age)
    let edadB =  [...arr].sort((a,b)=> b.age-a.age)
    let nombre = [...arr].sort((a,b)=> b.name.localeCompare(a.name))
    return { edadA, edadB, nombre }
}

// 8 Ejercicio PRO

//     const orders = [
//     {user:"Ana", total:30},
//     {user:"Luis", total:20},
//     {user:"Ana", total:50},
//     {user:"Luis", total:10},
//     {user:"Pedro", total:40}
//     ]
// {
//  Ana: 80,
//  Luis: 30,
//  Pedro: 40
// }

    function ordenar(arr){
       return arr.reduce((acum,valor)=>{
            acum[valor.user] = (acum[valor.user] || 0) + valor.total
            return acum  
        },{})
    }

//9️⃣ Ejercicio PRO 2 (nivel entrevista)
function votos(arr){
    let objNuee={}
    for(let i of arr){
        if(!objNuee[i]){
            objNuee[i]=1
        }else{
            objNuee[i]++
        }
    }
    return objNuee
}

// 10️⃣ Ejercicio PRO 3 (nivel fuerte)
function flateando(arr){
    let nuevooAaaa=[]
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
           nuevooAaaa= nuevooAaaa.concat(flateando(arr[i]))
        }else{
            nuevooAaaa.push(arr[i])
        }
    }
    return nuevooAaaa
}