import React, { Component } from "react";
import "./Comp.css";
import Square from "./Square";

class Board extends Component {
  updateSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  render() {
    return (
      <div>
        <div className="board-row">
          {this.updateSquare(0)}
          {this.updateSquare(1)}
          {this.updateSquare(2)}
        </div>
        <div className="board-row">
          {this.updateSquare(3)}
          {this.updateSquare(4)}
          {this.updateSquare(5)}
        </div>
        <div className="board-row">
          {this.updateSquare(6)}
          {this.updateSquare(7)}
          {this.updateSquare(8)}
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Board;
