var assert = require('assert');
var app = require('../js/app.js');

describe('Tic tac toe', function() {
  var tictactoe;

  //Crea nuestra clase tic tac toe que va a tener la lógica del juego
  before(function() {
    tictactoe = new app.Tictactoe();
  });

  it('Debo poder crear un nuevo juego con los valores por defecto', function() {
    tictactoe.newGame();
    assert.deepEqual([["+","+","+"],["+","+","+"],["+","+","+"]],tictactoe.board);
    assert.equal(0,tictactoe.turn); // El turno lo represento con una variable que hace 0 o 1
  });

  it('Debo poder hacer una jugada', function() {
    tictactoe.newGame();
    tictactoe.jugar(1);
    assert.deepEqual([["x","+","+"],["+","+","+"],["+","+","+"]],tictactoe.board);
    tictactoe.jugar(2);
    assert.deepEqual([["+","o","+"],["+","+","+"],["+","+","+"]],tictactoe.board);
  });

  it('Solo debe ser posible jugar dentro del tablero(1-9)',function() {

  });

  it('Debo poder validar que alguien gano el juego',function() {

  });

  it('Debo poder validar si hay empate', function() {

  });
});

/*


<table border="1" align="center" width="350" height="350">
  <tr>
    <td id="1" onClick="f('X0')"><input type="button" value="" class="tic" id="1"></td>
    <td id="2" onClick="f('X1')"></td>
    <td id="3" onClick="f('X2')"></td>
  </tr>
  <tr>
    <td id="4" onClick="f('X3')"></td>
    <td id="5" onClick="f('X4')"></td>
    <td id="6" onClick="f('X5')"></td>
  </tr>
  <tr>
    <td id="7" onClick="f('X6')"></td>
    <td id="8" onClick="f('X7')"></td>
    <td id="9" onClick="f('X8')"></td>
  </tr>
</table>

*/
