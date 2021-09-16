import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import { oneBoard, deleteBoard } from './../../api/boardAuth'

class ShowGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      board: {
        moves: []
      }
    }
  }

  componentDidMount () {
    oneBoard(this.props.user, this.props.match.params.id)
      .then(res => this.setState({
        board: {
          moves: res.data.board.moves
        }
      }))
      .catch((error) => {
        this.props.msgAlert({
          heading: 'Cannot show this game',
          message: 'Something went wrong: ' + error.message,
          variant: 'danger'
        })
      })
  }

  destroy = boardId => {
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

  render () {
    return (
      <>
        <div>{this.state.board.moves}</div>
        <Button onClick={() => this.destroy(this.props.match.params.id)}>Delete this game</Button>
      </>
    )
  }
}

export default withRouter(ShowGame)
