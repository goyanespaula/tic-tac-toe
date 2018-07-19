import React, { Component } from "react";
import Board from "./containers/Board";
import checkWin from "./helpers/checkWin";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlayer: "X",
      layout: Array(3)
        .fill(null)
        .map(square => Array(3).fill(null)),
      moveCount: 0,
      winner: false,
      showWinScreen: false
    };
    this.playSquare = this.playSquare.bind(this);
  }

  changePlayer() {
    let currPlayer = this.state.currPlayer === "X" ? "O" : "X";
    this.setState({ currPlayer });
  }

  playSquare(x, y) {
    let layout = this.state.layout.slice();
    layout[x][y] = this.state.currPlayer;
    let moveCount = this.state.moveCount + 1;

    this.setState({ layout, moveCount });

    const winner = checkWin(layout, x, y, this.state.currPlayer, moveCount);

    if (winner) {
      this.setState({ winner, showWinScreen: true });
    } else {
      this.changePlayer();
    }
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
