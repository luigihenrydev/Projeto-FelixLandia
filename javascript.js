var estaEscondido = false;

function mostrarMenu() {
    estaEscondido = !estaEscondido
   if (estaEscondido == true){
    document.getElementById('show-menu1').style.display = 'initial';
    document.getElementById('show-menu2').style.display = 'initial';
    document.getElementById('show-menu3').style.display = 'initial';
   }
   else {
    document.getElementById('show-menu1').style.display = 'none';
    document.getElementById('show-menu2').style.display = 'none';
    document.getElementById('show-menu3').style.display = 'none';
   } 
}