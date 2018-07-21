import React, { Component } from "react";
import Board from "./Board";
import WinScreen from "./WinScreen";
import checkWin from "../helpers/checkWin";
import "../styling/Game.css";

const initialState = {
  currPlayer: "X",
  layout: Array(3)
    .fill(null)
    .map(square => Array(3).fill(null)),
  moveCount: 0,
  winner: false,
  showWinScreen: false
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.playSquare = this.playSquare.bind(this);
    this.reset = this.reset.bind(this);
  }

  changePlayer() {
    let currPlayer = this.state.currPlayer === "X" ? "O" : "X";
    this.setState({ currPlayer });
  }

  playSquare(y, x) {
    let layout = this.state.layout.map(arr => arr.slice());
    layout[y][x] = this.state.currPlayer;
    let moveCount = this.state.moveCount + 1;

    const winner = checkWin(layout, y, x, this.state.currPlayer, moveCount);

    this.setState({ layout, moveCount });

    if (winner) {
      this.setState({ winner, showWinScreen: true });
    } else {
      this.changePlayer();
    }
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    return (
      <div id="game">
        <header>
          <h1>Tic-Tac-Toe</h1>
        </header>
        <Board layout={this.state.layout} playSquare={this.playSquare} />
        <h2>Current Player: {this.state.currPlayer}</h2>
        {this.state.showWinScreen ? (
          <WinScreen reset={this.reset} winner={this.state.winner} />
        ) : null}
      </div>
    );
  }
}

export default Game;
