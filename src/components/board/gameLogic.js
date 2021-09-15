export const emptyBoard = () => {
  const newBoard = []
  for (let i = 0; i < 7; i++) {
    newBoard[i] = [0, 0, 0, 0, 0, 0]
  }
  return newBoard
}
