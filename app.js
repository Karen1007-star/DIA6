// const p = document.getElementById("p1");
// const btn = document.getElementById("btn1");
// const box = document.getElementById("box");
// const btn2 = document.getElementById("btn2");

// btn.addEventListener("click", () => {
//   p.textContent = "¡Texto cambiado!";
// });

// btn2.addEventListener("click", () => {
//   box.style.backgroundColor = "blue";
// });

// // contador:
// const textoContador = document.getElementById("count")
// const suma = document.getElementById("sum")
// const reset = document.getElementById("reset")
// let contador=0;

// suma.addEventListener("click",()=>{
//     contador++;
//     textoContador.textContent=contador;
// })

// reset.addEventListener("click",()=>{
//     contador--;
//     textoContador.textContent=contador;
// })

// // Lista dinámica con validación:
// const texto = document.getElementById("task");
// const agregar = document.getElementById("addTask");
// const listaPadre = document.getElementById("taskList");

//   agregar.addEventListener("click",()=>{
//       let text = texto.value.trim();
//       if(!text) return;
//       let li = document.createElement("li");
//       li.textContent = text;
//       listaPadre.appendChild(li)
//       texto.value="";
//   })

//   listaPadre.addEventListener("click",(e)=>{
//       if(e.target.tagName === "LI"){
//         e.target.remove();
//       }
//   })

//   document.querySelectorAll(".item").forEach(li => {
//   li.addEventListener("click", () => {
//     li.classList.toggle("completed"); // agregará o quitará clase
//     });
//   });

const p1=document.getElementById("p1")
const boton1=document.getElementById("btn1")

boton1.addEventListener("click",()=>{
  p1.textContent="cambio de texto"
})

const box=document.getElementById("box")
const boton2=document.getElementById("btn2")

boton2.addEventListener("click",()=>{
  box.style.backgroundColor = "blue";
})