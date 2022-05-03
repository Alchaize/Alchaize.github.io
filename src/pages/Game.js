import React from "react";
import "./game.css";

import Board from "../components/board.js";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          chosenValue: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      selectedItem: null,
      reverseSorting: false,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      selectedItem: step,
    });
  }

  switchSorting() {
    this.setState({
      reverseSorting: !this.state.reverseSorting,
    });
  }

  // Restart the game
  restart() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
          chosenValue: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      selectedItem: null,
      reverseSorting: false,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          chosenValue: i,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      selectedItem: null,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let moves = history.map((step, move) => {
      const description = move
        ? "Go to move #" +
          move +
          " (" +
          getCol(step.chosenValue) +
          "," +
          getRow(step.chosenValue) +
          ")"
        : "Go to first move";

      if (move === this.state.selectedItem) {
        return (
          <li key={move}>
            <button
              className="btn"
              id="emphazised"
              onClick={() => this.jumpTo(move)}
            >
              {description}
            </button>
          </li>
        );
      } else {
        return (
          <li key={move}>
            <button className="btn" onClick={() => this.jumpTo(move)}>
              {description}
            </button>
          </li>
        );
      }
    });

    let list;
    if (this.state.reverseSorting) {
      moves.reverse();
      list = (
        <ol className="movesList" reversed>
          {moves}
        </ol>
      );
    } else {
      list = <ol className="movesList">{moves}</ol>;
    }

    let restartPopup = [];
    let status;
    if (winner != null) {
      status = "Winner: " + winner;
    } else {
      if (this.state.stepNumber === 9) {
        status = "Draw";
        restartPopup = [
          <div key={winner} className="restartPopup">
            <button className="restartButton" onClick={() => this.restart()}>
              Restart
            </button>
          </div>,
        ];
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
    }

    return (
      <div className="game">
        <div className="game-board-wrapper">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              winningSquares={winner}
            />
          </div>
          {restartPopup}
        </div>
        <div className="game-info">
          <div className="game-status">{status}</div>
          <button
            className="sortingButton btn"
            onClick={() => {
              this.switchSorting();
            }}
          >
            Switch sorting
          </button>
          {list}
        </div>
      </div>
    );
  }
}

function getCol(index) {
  return (index % 3) + 1;
}

function getRow(index) {
  return index < 3 ? 1 : index < 6 ? 2 : 3;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================
