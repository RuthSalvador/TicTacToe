var turno = 0;
function game(elemento) {
  if (turno == 0){
    elemento.value = "X";
    turno = 1;
  }else{
    elemento.value = "O";
    turno = 0;
}

  var cuadro1 = document.getElementById('c1');
  var cuadro2 = document.getElementById('c2');
  var cuadro3 = document.getElementById('c3');
  var cuadro4 = document.getElementById('c4');
  var cuadro5 = document.getElementById('c5');
  var cuadro6 = document.getElementById('c6');
  var cuadro7 = document.getElementById('c7');
  var cuadro8 = document.getElementById('c8');
  var cuadro9 = document.getElementById('c9');
  var repite = document.getElementById('newGame');
  var empatar = 0;

    if (((cuadro1.value =="X")&&(cuadro2.value =="X")&&(cuadro3.value =="X")) ||
        ((cuadro4.value =="X")&&(cuadro5.value =="X")&&(cuadro6.value =="X")) ||
        ((cuadro7.value =="X")&&(cuadro8.value =="X")&&(cuadro9.value =="X")) ||
        ((cuadro1.value =="X")&&(cuadro4.value =="X")&&(cuadro7.value =="X")) ||
        ((cuadro2.value =="X")&&(cuadro5.value =="X")&&(cuadro8.value =="X")) ||
        ((cuadro3.value =="X")&&(cuadro6.value =="X")&&(cuadro9.value =="X")) ||
        ((cuadro1.value =="X")&&(cuadro5.value =="X")&&(cuadro9.value =="X")) ||
        ((cuadro3.value =="X")&&(cuadro5.value =="X")&&(cuadro7.value =="X"))){
          empatar = 1;
          alert ('Felicidades Jugador 1 "X", usted ha ganado');

    }
    if (((cuadro1.value =="O")&&(cuadro2.value =="O")&&(cuadro3.value =="O")) ||
        ((cuadro4.value =="O")&&(cuadro5.value =="O")&&(cuadro6.value =="O")) ||
        ((cuadro7.value =="O")&&(cuadro8.value =="O")&&(cuadro9.value =="O")) ||
        ((cuadro1.value =="O")&&(cuadro4.value =="O")&&(cuadro7.value =="O")) ||
        ((cuadro2.value =="O")&&(cuadro5.value =="O")&&(cuadro8.value =="O")) ||
        ((cuadro3.value =="O")&&(cuadro6.value =="O")&&(cuadro9.value =="O")) ||
        ((cuadro1.value =="O")&&(cuadro5.value =="O")&&(cuadro9.value =="O")) ||
        ((cuadro3.value =="O")&&(cuadro5.value =="O")&&(cuadro7.value =="O"))){
          empatar = 1;
          alert ('Felicidades Jugador 2 "O", usted ha ganado');

    }
    if ((cuadro1.value !="  ")&&(cuadro2.value !="  ")&&(cuadro3.value !="  ")&&
        (cuadro4.value !="  ")&&(cuadro5.value !="  ")&&(cuadro6.value !="  ")&&
        (cuadro7.value !="  ")&&(cuadro8.value !="  ")&&(cuadro9.value !="  ")&&
        (empatar == 0)){
          alert ('Han quedado empate ¡vayan por la revancha!');
    }


repite.onclick = function (){
  cuadro1.value ="  ";
  cuadro2.value ="  ";
  cuadro3.value ="  ";
  cuadro4.value ="  ";
  cuadro5.value ="  ";
  cuadro6.value ="  ";
  cuadro7.value ="  ";
  cuadro8.value ="  ";
  cuadro9.value ="  ";
}

}
