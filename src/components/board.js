import React from "react";
import "./board.css";

function Square(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        className="square-normal"
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderHighlightedSquare(i) {
    return (
      <Square
        className="square-highlighted"
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winningSquares = calculateWinnerSquares(this.props.squares);

    let board = [];

    for (let i = 0; i < 3; i++) {
      let squares = [];

      for (let j = 0; j < 3; j++) {
        let currentSquare = j + i * 3;

        // Check if a player has won
        if (winningSquares !== null) {
          // A player has won, check if the current square is one of the winning
          if (winningSquares.includes(currentSquare)) {
            // Add a highlighted square to render
            squares.push(
              <div key={currentSquare}>
                {this.renderHighlightedSquare(currentSquare)}
              </div>
            );
            // Don't add another square
            continue;
          }
        }

        // Add a square to render
        squares.push(
          <div key={currentSquare}>{this.renderSquare(currentSquare)}</div>
        );
      }
      board.push(
        <div key={i} className="board-row">
          {squares}
        </div>
      );
    }

    return <div className="board">{board}</div>;
  }
}

function calculateWinnerSquares(squares) {
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
      return lines[i];
    }
  }
  return null;
}
