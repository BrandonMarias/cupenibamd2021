let menu = document.querySelector('#desplegable');
let botonMenu = document.querySelector('#boton-menu');
let mostrarMetas = document.querySelector("#menu-metas");
let mostrarTareas = document.querySelector("#menu-tareas");
let padlet = document.getElementById("padlet")

let link1 = document.getElementById("link1")
let link2 = document.getElementById("link2")
let link3 = document.getElementById("link3")
let link4 = document.getElementById("link4")
let link5 = document.getElementById("link5")
let link6 = document.getElementById("link6")
let link7 = document.getElementById("link7")
let link8 = document.getElementById("link8")
let link9 = document.getElementById('link9')
let link10 = document.getElementById('link10')
let link11 = document.getElementById('link11')
let overFY = document.querySelector("main.slides");

link1.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link2.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link3.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link4.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link5.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link6.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link7.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link8.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link9.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link10.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});
link11.addEventListener('click',()=>{
   menu.classList.toggle("show-menu")
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }
   if(meta1.classList.contains("show-metas")){
      metasToggle();
      }
});

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
}
   
);

mostrarMetas.addEventListener("click", () =>{
   metasToggle();
   if(tarea1.classList.contains("show-metas")){
      tareasToggle();
   }

})

mostrarTareas.addEventListener("click", () =>{
   tareasToggle();
   if(meta1.classList.contains("show-metas")){
   metasToggle();
   }
})

