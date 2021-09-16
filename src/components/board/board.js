import React from 'react'
import './boardStyles.css'

class Board extends React.Component {
  render () {
    return (
      <>
        <form className="game-form">
          <div className="board">
            <div className="field">
              <div className="grid column">
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot11" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot11" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot12" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot12" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot13" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot13" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot14" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot14" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot15" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot15" tabIndex="-1" required/>
                <div className="disc"></div>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot16" tabIndex="-1" required/>
                <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot16" tabIndex="-1" required/>
                <div className="disc"></div>

                <div className="column">
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot21" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot21" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot22" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot22" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot23" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot23" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot24" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot24" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot25" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot25" tabIndex="-1" required/>
                  <div className="disc"></div>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot26" tabIndex="-1" required/>
                  <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot26" tabIndex="-1" required/>
                  <div className="disc"></div>

                  <div className="column">
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot31" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot31" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot32" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot32" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot33" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot33" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot34" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot34" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot35" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot35" tabIndex="-1" required/>
                    <div className="disc"></div>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot36" tabIndex="-1" required/>
                    <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot36" tabIndex="-1" required/>
                    <div className="disc"></div>

                    <div className="column">
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot41" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot41" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot42" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot42" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot43" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot43" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot44" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot44" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot45" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot45" tabIndex="-1" required/>
                      <div className="disc"></div>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot46" tabIndex="-1" required/>
                      <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot46" tabIndex="-1" required/>
                      <div className="disc"></div>

                      <div className="column">
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot51" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot51" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot52" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot52" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot53" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot53" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot54" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot54" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot55" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot55" tabIndex="-1" required/>
                        <div className="disc"></div>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot56" tabIndex="-1" required/>
                        <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot56" tabIndex="-1" required/>
                        <div className="disc"></div>

                        <div className="column">
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot61" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot61" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot62" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot62" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot63" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot63" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot64" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot64" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot65" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot65" tabIndex="-1" required/>
                          <div className="disc"></div>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot66" tabIndex="-1" required/>
                          <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot66" tabIndex="-1" required/>
                          <div className="disc"></div>

                          <div className="column">
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot71" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot71" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot72" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot72" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot73" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot73" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot74" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot74" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot75" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot75" tabIndex="-1" required/>
                            <div className="disc"></div>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot76" tabIndex="-1" required/>
                            <input onChange={this.props.handleChange} className="piece-input onChange={this.props.handleChange}" type="radio" name="slot76" tabIndex="-1" required/>
                            <div className="disc"></div>

                            <div className="column"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
