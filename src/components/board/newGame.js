import React from 'react'
import withRouter from 'react-router-dom'

import Button from 'react-bootstrap'

import createBoard from './../../api/boardAuth'
import emptyBoard from './gameLogic'

class NewGame extends React.Component {
  newGame = () => {
    const { user, msgAlert, history } = this.props
    const gameBoard = emptyBoard()
    createBoard(user, gameBoard)
      .then(res => history.push(`/boards/${res.board._id}`))
      .catch(error => {
        msgAlert({
          heading: 'Cannot create a new game',
          message: 'Something went wrong: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <>
        <Button onClick={() => this.newGame()}>New Game</Button>
      </>
    )
  }
}

export default withRouter(NewGame)
