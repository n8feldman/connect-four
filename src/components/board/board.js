import React from 'react'
import './boardStyles.css'

class Board extends React.Component {
  // we have an array of 6 columns "moves"
  // function maps column into six input-input-disc "items", check off inputs when valid
  // Take those seven columns, put another <div> which starts the next column either before or after it
  // Make sure closing tags are handled properly
  // return a JSX object
  // in the render() function put that JSX object in the code

  inputBuilder = moves => {
    const inputs = [[], [], [], [], [], [], []]
    for (let col = 0; col < moves.length; col++) {
      for (let row = 0; row < moves[col].length; row++) {
        const slot = `slot${col + 1}${row + 1}`
        if (moves[col][row] === 0) { // spot is empty.
          inputs[col][row] = (
            <>
              <input onChange={this.props.handleChange} className="piece-input" type="radio" name={slot} tabIndex="-1" required/>
              <input onChange={this.props.handleChange} className="piece-input" type="radio" name={slot} tabIndex="-1" required/>
              <div className="disc"></div>
            </>)
        } else if (moves[col][row] % 2 === 0) { // move is an even number. Yellow input checked.
          inputs[col][row] = (
            <>
              <input onChange={this.props.handleChange} className="piece-input" type="radio" name={slot} tabIndex="-1" required checked/>
              <input onChange={this.props.handleChange} className="piece-input" type="radio" name={slot} tabIndex="-1" required/>
              <div className="disc"></div>
            </>
          )
        } else { // move is an odd number. Red input checked.
          inputs[col][row] = (
            <>
              <input onChange={this.props.handleChange} className="piece-input" type="radio" name={slot} tabIndex="-1" required/>
              <input onChange={this.props.handleChange} className="piece-input" type="radio" name={slot} tabIndex="-1" required checked/>
              <div className="disc"></div>
            </>
          )
        }
      }
    }
    return inputs
  }

  inputCombiner = inputs => {
    return (
      <>{inputs[0]}{inputs[1]}{inputs[2]}{inputs[3]}{inputs[4]}{inputs[5]}</>
    )
  }

  buildBoard = moves => {
    const inputs = this.inputBuilder(moves)
    console.log(inputs)
    const columns = []
    for (let col = 0; col < inputs.length; col++) {
      columns[col] = this.inputCombiner(inputs[col])
    }
    console.log(columns)
    return (
      <>
        {columns[0]}<div className="column">
          {columns[1]}<div className="column">
            {columns[2]}<div className="column">
              {columns[3]}<div className="column">
                {columns[4]}<div className="column">
                  {columns[5]}<div className="column">
                    {columns[6]}<div className="column">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  render () {
    const innerJsx = this.buildBoard(this.props.moves)
    return (
      <>
        <form className="game-form">
          <div className="board">
            <div className="field">
              <div className="grid column">
                {innerJsx}
                {/* <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot11" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot11" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot12" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot12" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot13" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot13" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot14" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot14" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot15" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot15" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot16" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot16" tabIndex="-1" required/>
                <div className="disc"></div>

                <div className="column">
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot21" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot21" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot22" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot22" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot23" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot23" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot24" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot24" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot25" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot25" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot26" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot26" tabIndex="-1" required/>
                  <div className="disc"></div>

                  <div className="column">
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot31" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot31" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot32" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot32" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot33" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot33" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot34" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot34" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot35" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot35" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot36" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot36" tabIndex="-1" required/>
                    <div className="disc"></div>

                    <div className="column">
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot41" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot41" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot42" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot42" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot43" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot43" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot44" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot44" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot45" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot45" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot46" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot46" tabIndex="-1" required/>
                      <div className="disc"></div>

                      <div className="column">
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot51" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot51" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot52" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot52" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot53" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot53" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot54" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot54" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot55" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot55" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot56" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot56" tabIndex="-1" required/>
                        <div className="disc"></div>

                        <div className="column">
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot61" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot61" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot62" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot62" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot63" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot63" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot64" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot64" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot65" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot65" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot66" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot66" tabIndex="-1" required/>
                          <div className="disc"></div>

                          <div className="column">
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot71" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot71" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot72" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot72" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot73" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot73" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot74" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot74" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot75" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot75" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot76" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input" type="radio" name="slot76" tabIndex="-1" required/>
                            <div className="disc"></div>

                            <div className="column"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="front"></div>
          </div>
        </form>
      </>
    )
  }
}

export default Board
