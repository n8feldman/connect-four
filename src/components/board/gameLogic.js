export const emptyBoard = () => {
  const newBoard = []
  for (let i = 0; i < 6; i++) {
    newBoard[i] = [0, 0, 0, 0, 0, 0, 0]
  }
  return newBoard
  // return Array(42).fill(0)
}

export const updateBoard = (oldBoard, cellName) => {
  
}

// Utility function that converts a 7x6 board into a 42-number array for Mongoose backend
// export const horizontalize = liveBoard => {
//   const flatArr = liveBoard.flat()
//   return flatArr
// }

// // Takes a 42-number array and turns it into a 7x6 array for use
// export const verticalize = flatBoard => {
//   const upright = [[], [], [], [], [], [], []]
//   for (let i = 0; i < verticalize.length; i++) {
//     upright[Math.floor(i / 6)][i % 6] = flatBoard[i]
//   }
// }
