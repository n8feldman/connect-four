import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import { oneBoard, deleteBoard, updateBoard } from './../../api/boardAuth'

import Board from './board'

import { makeMove, checkWinner } from './gameLogic'

class ShowGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      board: {
        moves: [],
        winner: null
      },
      nextMove: 1
    }
  }

  componentDidMount () {
    oneBoard(this.props.user, this.props.match.params.id)
      .then((res) =>
        this.setState({
          board: {
            moves: res.data.board.moves,
            winner: res.data.board.gameOver
          },
          nextMove: Math.max(...res.data.board.moves.flat()) + 1
        })
      )
      .catch((error) => {
        this.props.msgAlert({
          heading: 'Cannot show this game',
          message: 'Something went wrong: ' + error.message,
          variant: 'danger'
        })
      })
  }

  destroy = (boardId) => {
    const { user, msgAlert, history } = this.props
    deleteBoard(user, boardId)
      .then(history.push('/new-game'))
      .catch((err) =>
        msgAlert({
          heading: 'Delete failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  handleChange = (event) => {
    console.log(event)
    // event.preventDefault()
    const nextMove = this.state.nextMove
    const updatedMoves = makeMove(this.state.board.moves, event.target.name, nextMove)
    const updatedWinner = checkWinner(updatedMoves)
    const newBoard = {
      moves: updatedMoves,
      winner: updatedWinner
    }
    updateBoard(this.props.user, this.props.match.params.id, newBoard)
      .then(res => console.log(res))
      .then(() =>
        this.setState({
          board: {
            moves: updatedMoves,
            winner: updatedWinner // also check if game is over, add variable to state
          },
          nextMove: nextMove + 1
        })
      )
      .catch((err) => {
        event.target.checked = false
        this.props.msgAlert({ heading: 'Update failed', message: 'Something went wrong: ' + err.message, variant: 'danger' })
      })
  }

  render () {
    let winnerJsx = null
    const winner = this.state.board.winner
    if (winner) {
      if (winner === 'red') {
        winnerJsx = <h1>Congratulations! The winner is <span style={{ color: 'red' }}>{this.state.board.winner}</span>.</h1>
      } else if (winner === 'yellow') {
        winnerJsx = <h1>Congratulations! The winner is <span style={{ color: 'yellow' }}>{this.state.board.winner}</span>.</h1>
      } else if (winner === 'draw') {
        winnerJsx = <h1>The game is drawn. Nobody is a winner!</h1>
      }
    }
    return (
      <>
        <Board handleChange={this.handleChange} moves={this.state.board.moves}/>
        {winnerJsx}
        <Button onClick={() => this.destroy(this.props.match.params.id)}>Delete this game</Button>
      </>
    )
  }
}

export default withRouter(ShowGame)
