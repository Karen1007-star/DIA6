const count = document.getElementById("count");
const agregar = document.getElementById("agregar");
const encender = document.getElementById("toggle")
let contador=0;

agregar.addEventListener("click",()=>{
    count.value= contador+1;
    count.textContent = count.value;
    contador++;
})

encender.addEventListener("click",()=>{
    if(encender.textContent=="Encender"){
        encender.textContent="Apagar"
    }else{
        encender.textContent="Encender"
    }
})