const lista = document.getElementById("miLista");
const botonAgregar = document.getElementById("agregar");

// Acción 1: Hacer clic en un <li> para eliminarlo
lista.addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    e.target.remove();
  }
});

// Acción 2: Cambiar color y estilo al pasar el mouse
lista.addEventListener("mouseenter", (e) => {
  if(e.target.tagName === "LI"){
    e.target.style.backgroundColor = "lightblue";
  }
}, true); // true = captura eventos en fase de captura

lista.addEventListener("mouseleave", (e) => {
  if(e.target.tagName === "LI"){
    e.target.style.backgroundColor = "";
  }
}, true);

// Acción 3: Alternar clase 'activo' al hacer doble clic
lista.addEventListener("dblclick", (e) => {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("activo");
  }
});

// Acción 4: Agregar nuevo elemento con botón
let contador = 4;
botonAgregar.addEventListener("click", () => {
  const nuevo = document.createElement("li");
  nuevo.textContent = `Elemento ${contador++}`;
  lista.appendChild(nuevo);
});

// Acción 5: Cambiar texto de un <li> al hacer clic derecho
lista.addEventListener("contextmenu", (e) => {
  if(e.target.tagName === "LI"){
    e.preventDefault(); // evita menú contextual
    const nuevoTexto = prompt("Nuevo texto para este elemento:", e.target.textContent);
    if(nuevoTexto) e.target.textContent = nuevoTexto;
  }
});