let menu = document.querySelector('#desplegable');
let botonMenu = document.querySelector('#boton-menu');

let meta1 = document.querySelector('#meta1')
let meta2 = document.querySelector('#meta2')
let meta3 = document.querySelector('#meta3')


let tareas = document.getElementsByClassName("tareas");

let mostrarMetas = document.querySelector("#menu-metas");
let mostrarTareas = document.querySelector("#menu-tareas");

botonMenu.addEventListener("click", () => {
 menu.classList.toggle("show-menu");
});

mostrarMetas.addEventListener("click", () =>{
   meta1.classList.toggle("hidden-metas")
   meta1.classList.toggle("show-metas")
   meta2.classList.toggle("hidden-metas")
   meta2.classList.toggle("show-metas")
   meta3.classList.toggle("hidden-metas")
   meta3.classList.toggle("show-metas")
})

mostrarTareas.addEventListener("click", () =>{
   tarea1.classList.toggle("hidden-metas")
   tarea1.classList.toggle("show-metas")
   tarea2.classList.toggle("hidden-metas")
   tarea2.classList.toggle("show-metas")
   tarea3.classList.toggle("hidden-metas")
   tarea3.classList.toggle("show-metas")
})
