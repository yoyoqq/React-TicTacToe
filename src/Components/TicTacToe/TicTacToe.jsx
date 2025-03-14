import React, { useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' />`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' />`;
      data[num] = "o";
    }
    setCount(count + 1);
    checkWin();
  };

  const checkWin = () => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (data[a] !== "" && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]);
        return;
      }
    }

    // Check for draw
    if (count === 8) {
      alert("Game Draw!");
      setLock(true);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      alert("X wins!");
    } else {
      alert("O wins!");
    }
  };

  const reset = () => {
    setLock(false);
    setCount(0);
    data = ["", "", "", "", "", "", "", "", ""];
    let boxes = document.getElementsByClassName("boxes");
    for (let box of boxes) {
      box.innerHTML = "";
    }
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe;