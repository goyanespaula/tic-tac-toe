import React, { Component } from "react";
import Board from "./containers/Board";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlayer: "X",
      showWinScreen: false,
      layout: Array(3)
        .fill(null)
        .map(square => Array(3).fill(null))
    };
    this.playSquare = this.playSquare.bind(this);
  }

  changePlayer() {
    let currPlayer = this.state.currPlayer === "X" ? "O" : "X";
    this.setState({ currPlayer });
  }

  playSquare(x, y) {
    // if (checkWin())
    // else
    let newLayout = this.state.layout.slice();
    newLayout[x][y] = this.state.currPlayer === "X" ? "X" : "O";
    this.changePlayer();
    this.setState(newLayout);
  }

  reset() {
    this.setState({ showWinScreen: false, currPlayer: 1 });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <header>
          <h1>Welcome to TicTacToe</h1>
        </header>
        <Board layout={this.state.layout} playSquare={this.playSquare} />
      </div>
    );
  }
}

export default Game;
