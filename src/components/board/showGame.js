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
      moves: updatedMoves
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
    return (
      <>
        <div>{this.state.board.moves[0]}</div>
        <div>{this.state.board.moves[1]}</div>
        <div>{this.state.board.moves[2]}</div>
        <div>{this.state.board.moves[3]}</div>
        <div>{this.state.board.moves[4]}</div>
        <div>{this.state.board.moves[5]}</div>
        <div>{this.state.board.moves[6]}</div>
        <Board handleChange={this.handleChange} moves={this.state.board.moves}/>
        <h1>Congratulations! The winner is {this.state.board.winner}.</h1>
        <Button onClick={() => this.destroy(this.props.match.params.id)}>Delete this game</Button>
      </>
    )
  }
}

export default withRouter(ShowGame)
