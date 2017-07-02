var grid = []
var player = 2

function tttModule () {
  function restart () {
    grid = []
    player = 2
  }

  function isGameOver () {
    if (whoWon() !== 0) {
      return true
    } else {
      return false
    }
  }

  function whoWon () {
    if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
    if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
    if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
    if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
    if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
    if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
    if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] && grid[5] && grid[6] && grid[7] && grid[8]) {
      return 3
    } else {
      return 0
    }
  }

  function playTurn (index) {
    if (grid[index]) {
      return false
    } else {
      grid[index] = player
    }
    if (player === 1) {
      player = 2
    } else {
      player = 1
    }
    return true
  }

  return {
    restart: restart,
    isGameOver: isGameOver,
    whoWon: whoWon,
    playTurn: playTurn
  }
}
