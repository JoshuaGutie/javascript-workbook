"use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

let playerTurn = "X";

function printBoard() {
  console.log("   0  1  2");
  console.log("0 " + board[0].join(" | "));
  console.log("  ---------");
  console.log("1 " + board[1].join(" | "));
  console.log("  ---------");
  console.log("2 " + board[2].join(" | "));
}
var r = 0;
var c = 0;
function horizontalWin() {
  for (var r = 0; r < 3; r++) {
    if (
      board[r][0] == board[r][1] &&
      board[r][1] == board[r][2] &&
      board[r][0] != " "
    ) {
      return true;
    }
  }
  return false;
}

function verticalWin() {
  for (var c = 0; c < 3; c++) {
    if (
      board[0][c] == board[1][c] &&
      board[1][c] == board[2][c] &&
      board[0][c] != " "
    ) {
      return true;
    }
  }
}

function diagonalWin() {
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] != " "
  ) {
    return true;
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] != " "
  ) {
    return true;
  }
}

function checkForWin() {
  if (horizontalWin()) {
    return true;
  } else if (verticalWin()) {
    return true;
  } else if (diagonalWin()) {
    return true;
  }
}
//done
function ticTacToe(row, column) {
  if (checkForWin()) {
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
  } else if (board[row][column] == " ") {
    board[row][column] = playerTurn;
  }
  if (playerTurn == "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
  return playerTurn;
}

function printInput() {
  var spanElement = document.getElementById("playerMove");
  console.log(spanElement);
  spanElement.innerText = playerTurn;
}
