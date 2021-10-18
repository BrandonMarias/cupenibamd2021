let arriba = document.querySelector('main');
let icono = document.querySelector('.gotop-container');
let gotop =document.querySelector('.gotop');

arriba.onscroll = function(){

   if(this.scrollTop > 120 ){
      icono.classList.add('show');
   }else{
      icono.classList.remove('show');
   }
}


