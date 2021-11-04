let menu = document.querySelector('#desplegable');
let botonMenu = document.querySelector('#boton-menu');
let mostrarMetas = document.querySelector("#menu-metas");
let mostrarTareas = document.querySelector("#menu-tareas");
let padlet = document.getElementById("padlet")
let overFY = document.querySelector("main.slides");
let linksB = [];

for(let i = 0; i < 11; i++){
   linksB.push(document.getElementById("link" + (i + 1)));
   linksB[i].addEventListener('click',()=>{
      menu.classList.toggle("show-menu");
      overFY.classList.toggle("over-y");
      if(tarea1.classList.contains("show-metas")){
         tareasToggle();
      }
      if(meta1.classList.contains("show-metas")){
         metasToggle();
         }
   });
}

function metasToggle(){
   meta1.classList.toggle("show-metas")
   meta2.classList.toggle("show-metas")
   meta3.classList.toggle("show-metas")
}
function tareasToggle(){
   tarea1.classList.toggle("show-metas")
      tarea2.classList.toggle("show-metas")
      tarea3.classList.toggle("show-metas")
      tarea4.classList.toggle("show-metas")
      tarea5.classList.toggle("show-metas")
      tarea6.classList.toggle("show-metas")
}

botonMenu.addEventListener("click", function (){
   menu.classList.toggle("show-menu");
   padlet.classList.toggle("z-1");
   overFY.classList.toggle("over-y");
});

mostrarMetas.addEventListener("click", () =>{
   metasToggle();
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }

});

mostrarTareas.addEventListener("click", () =>{
   tareasToggle();
   if(meta1.classList.contains("show-metas")){
   metasToggle();
   }
});

