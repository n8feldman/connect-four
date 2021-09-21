export const emptyBoard = () => {
  const newBoard = []
  for (let i = 0; i < 7; i++) {
    newBoard[i] = [0, 0, 0, 0, 0, 0]
  }
  return newBoard
}

export const makeMove = (oldBoard, cellName, moveNum) => {
  const row = Number(cellName.charAt(5)) - 1
  const col = Number(cellName.charAt(4)) - 1
  const newBoard = [[], [], [], [], [], [], []]
  for (let i = 0; i < oldBoard.length; i++) {
    for (let j = 0; j < oldBoard[i].length; j++) {
      newBoard[i][j] = oldBoard[i][j]
    }
  }
  newBoard[col][row] = moveNum
  return newBoard
}

const makeUniform = (numberedBoard) => {
  const newBoard = [[], [], [], [], [], [], []]
  for (let i = 0; i < numberedBoard.length; i++) {
    for (let j = 0; j < numberedBoard[i].length; j++) {
      if (numberedBoard[i][j] !== 0 && numberedBoard[i][j] % 2 === 0) {
        newBoard[i][j] = 2
      } else if (numberedBoard[i][j] !== 0 && numberedBoard[i][j] % 2 !== 0) {
        newBoard[i][j] = 1
      } else {
        newBoard[i][j] = 0
      }
    }
  }
  return newBoard
}

const checkVerticals = (uniformBoard) => {
  for (let i = 0; i < 7; i++) {
    // check all vertical possibilities for each column
    const lowest = [uniformBoard[i][0], uniformBoard[i][1], uniformBoard[i][2], uniformBoard[i][3]]
    const middle = [uniformBoard[i][1], uniformBoard[i][2], uniformBoard[i][3], uniformBoard[i][4]]
    const highest = [uniformBoard[i][2], uniformBoard[i][3], uniformBoard[i][4], uniformBoard[i][5]]

    // see if any of the possibilities are uniformly taken by one number
    if (lowest.every(value => { return value === 1 }) || middle.every(value => { return value === 1 }) || highest.every(value => { return value === 1 })) {
      return 1
    } else if (lowest.every(value => { return value === 2 }) || middle.every(value => { return value === 2 }) || highest.every(value => { return value === 2 })) {
      return 2
    }
  }

  return null
}

const checkHorizontals = (uniformBoard) => {
  for (let i = 0; i < 6; i++) {
    // check all horizontal possibilities for each column
    const left = [uniformBoard[0][i], uniformBoard[1][i], uniformBoard[2][i], uniformBoard[3][i]]
    const middleLeft = [uniformBoard[1][i], uniformBoard[2][i], uniformBoard[3][i], uniformBoard[4][i]]
    const middleRight = [uniformBoard[2][i], uniformBoard[3][i], uniformBoard[4][i], uniformBoard[5][i]]
    const right = [uniformBoard[3][i], uniformBoard[4][i], uniformBoard[5][i], uniformBoard[6][i]]

    // see if any of the possibilities are uniformly taken by one number
    if (left.every(value => { return value === 1 }) || middleLeft.every(value => { return value === 1 }) || middleRight.every(value => { return value === 1 }) || right.every(value => { return value === 1 })) {
      return 1
    } else if (left.every(value => { return value === 2 }) || middleLeft.every(value => { return value === 2 }) || middleRight.every(value => { return value === 2 }) || right.every(value => { return value === 2 })) {
      return 2
    }
  }

  return null
}

const checkDiagonals = (uniformBoard) => {
  for (let i = 0; i < 4; i++) {
    // check diagonals going up to the right
    const lowestUp = [uniformBoard[i][0], uniformBoard[i + 1][1], uniformBoard[i + 2][2], uniformBoard[i + 3][3]]
    const middleUp = [uniformBoard[i][1], uniformBoard[i + 1][2], uniformBoard[i + 2][3], uniformBoard[i + 3][4]]
    const highestUp = [uniformBoard[i][2], uniformBoard[i + 1][3], uniformBoard[i + 2][4], uniformBoard[i + 3][5]]

    // check diagonals going down to the right
    const highestDown = [uniformBoard[i][5], uniformBoard[i + 1][4], uniformBoard[i + 2][3], uniformBoard[i + 3][2]]
    const middleDown = [uniformBoard[i][4], uniformBoard[i + 1][3], uniformBoard[i + 2][2], uniformBoard[i + 3][1]]
    const lowestDown = [uniformBoard[i][3], uniformBoard[i + 1][2], uniformBoard[i + 2][1], uniformBoard[i + 3][0]]

    // see if any of the possibilities are uniformly taken by one number
    if (lowestUp.every(value => { return value === 1 }) || middleUp.every(value => { return value === 1 }) || highestUp.every(value => { return value === 1 }) || highestDown.every(value => { return value === 1 }) || middleDown.every(value => { return value === 1 }) || lowestDown.every(value => { return value === 1 })) {
      return 1
    } else if (lowestUp.every(value => { return value === 2 }) || middleUp.every(value => { return value === 2 }) || highestUp.every(value => { return value === 2 }) || highestDown.every(value => { return value === 2 }) || middleDown.every(value => { return value === 2 }) || lowestDown.every(value => { return value === 2 })) {
      return 2
    }
  }

  return null
}

const checkDraw = uniformBoard => {
  const noZeros = 0
  for (let i = 0; i < uniformBoard.length; i++) {
    for (let j = 0; j < uniformBoard[i].length; j++) {
      if (uniformBoard[i][j] === 0) {
        return null
      }
    }
  }
  return noZeros
}

export const checkWinner = (newBoard) => {
  // makeUniform: function that converts the board into a 7x6 array of 1s and 2s (1: first player, 2: second player)
  const uniformBoard = makeUniform(newBoard)

  // check if the winner exists in any direction. If we find a winner, don't check anything else.
  let winner = null
  winner = checkVerticals(uniformBoard)
  if (!winner) {
    winner = checkHorizontals(uniformBoard)
  }
  if (!winner) {
    winner = checkDiagonals(uniformBoard)
  }
  if (!winner) {
    // if no unoccupied spaces are left (i.e. no '0's in uniformBoard), set winner to "0"
    winner = checkDraw(uniformBoard)
  }

  if (winner === 1) {
    return 'red'
  } else if (winner === 2) {
    return 'yellow'
  } else if (winner === 0) {
    return 'draw'
  } else {
    // no winner; game not over
    return null
  }
}
