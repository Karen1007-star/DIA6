//1
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
function conteo(fruits){
    let objConteo={}
    for(let fruta of fruits){
        if(!objConteo[fruta]){
            objConteo[fruta]=1
        }else{
            objConteo[fruta]++
        }
    }
    return objConteo
}

//"2"
const numbers = [1,2,3,2,4,5,3,6,1];
function eliminaDuplica(numbers){
    let objCon={}
    let arr=[]
    for(let i of numbers){
        if(!objCon[i]){
            objCon[i]=1
        }else{
            objCon[i]++
        }
    }
    for(let llave of Object.keys(objCon)){
        arr.push(Number(llave))
    }
    return arr
}

//3
const users = [
  {name: "Ana", role: "admin"},
  {name: "Luis", role: "user"},
  {name: "Maria", role: "admin"},
  {name: "Pedro", role: "user"}
];
function usuarios(users){
let newObjetito={}

for(let lla of users){
    if(!newObjetito[lla.role]){
        newObjetito[lla.role] = []
    }else{
        newObjetito[lla.role].push(lla.name)
    }
}

return newObjetito
}

//4
function createIdGenerator(){
    let id=0;
    return function(){
        id++
    }
} 

const generateId = createIdGenerator();
generateId(); // 1
generateId(); // 2
generateId(); // 3

//5
// const obj = {
//   value: 10,
//   getValue: function () {
//     return this.value;
//   }
// };

// const fn = obj.getValue;

// console.log(fn());
// se supone que this=obj; entonces el value=10, pero aqui va a salir UNDEFIND, 
// primero fn() no tiene quien le llame, osea no hay el this, lo otro
// es que obj.getValue retorna el mismo metodo y no el resultado
//ASI SERIA:
//5
const obj = {
  value: 10,
  getValue: function () {
    return this.value;
  }
};

const fn = obj.getValue();

console.log(fn);

//6

const arrN = [1,[2,3],[4,[5,6]]];
function flattt(arrN){
    let ArrNuevo=[]
    for(let i=0; i<arrN.length; i++){
        if(Array.isArray(arrN[i])){
            ArrNuevo = ArrNuevo.concat(flattt(arrN[i]))
        }else{
            ArrNuevo.push(arrN[i])
        }
    }
    return ArrNuevo
}

//7
//"start", "end", "promise", "timeout"