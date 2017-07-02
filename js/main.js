/* global alert tttModule player */
document.addEventListener('DOMContentLoaded', init)

var ttt = tttModule()

function init () {
  var squares = document.querySelectorAll('.square')
  squares.forEach(function (square) {
    square.addEventListener('click', function (e) {
      var index = parseInt(e.target.id.substring(3))
      ttt.playTurn(index)
      if (player === 1) {
        e.target.textContent = 'O'
      } else {
        e.target.textContent = 'X'
      }

      if (ttt.whoWon() === 1) {
        setTimeout(call, 150)
      } else if (ttt.whoWon() === 2) {
        setTimeout(call, 150)
      } else if (ttt.whoWon() === 3) {
        setTimeout(draw, 150)
      }

      function call () {
        alert('player ' + player + ' wins!')
        clear()
      }

      function draw () {
        return alert('It\'s a draw!')
        clear()
      }

      function clear () {
        squares.forEach(function (square) {
          square.textContent = ''
        })
      }

      if (ttt.isGameOver()) {
        ttt.restart()
      }
    })
  })
}
