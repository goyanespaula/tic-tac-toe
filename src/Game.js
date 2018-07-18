import React, { Component } from "react";
import Board from "./containers/Board";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlayer: 1,
      showWinScreen: false,
      layout: Array(3)
        .fill(null)
        .map(square => Array(3).fill("placeholder"))
    };
  }

  changePlayer() {
    let player = this.state.player === 1 ? 2 : 1;
    this.setState({ player });
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
        <Board layout={this.state.layout} />
      </div>
    );
  }
}

export default Game;
