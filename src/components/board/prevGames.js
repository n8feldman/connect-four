import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { indexBoards } from './../../api/boardAuth'

class PrevGames extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boards: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexBoards(user)
      .then((res) => this.setState({ boards: res.data.boards }))
      .then(() => msgAlert({ heading: 'Success', message: 'Here are your previous games.', variant: 'success' }))
      .catch((err) => msgAlert({ heading: 'Index failed', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  render () {
    const { boards } = this.state
    if (boards === null) {
      return <p>Loading...</p>
    }
    let boardJsx
    const ownedBoards = boards.filter(
      board => this.props.user._id === board.owner
    )
    if (ownedBoards.length === 0) {
      boardJsx = (
        <p>You have not played any games. Hit &quot;New Game&quot; to begin!</p>
      )
    } else {
      boardJsx = ownedBoards.map(board => (
        <Card key={board._id}>
          <Card.Body>
            <Card.Title>{board._id}</Card.Title>
            <Card.Text>Nothing here yet.</Card.Text>
            <Button onClick={() => console.log('here')}>View Game</Button>
          </Card.Body>
        </Card>
      ))
    }
    return (
      <>
        <div>
          <h1 style={{ margin: '0 auto' }}>Welcome!</h1>
        </div>
        <div>{boardJsx}</div>
      </>
    )
  }
}

export default withRouter(PrevGames)
