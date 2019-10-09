"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  console.log("I am inside move piece", startStack, endStack);
  var movedPiece = stacks[startStack].pop();
  return stacks[endStack].push(movedPiece);
}

function isLegal(startStack, endStack) {
  console.log("I am inside the is legal method");
  var startStackValues = stacks[startStack];
  var endStackValues = stacks[endStack];
  var endLength = endStackValues.length;
  if (endLength == 0) {
    return true;
  } else if (startStack.length == 0) {
    return false;
  }
  //end/stack is being sliced before the word starts to the first
  if (endStackValues.slice(-1)[0] > startStackValues.slice(-1)[0]) {
    return true;
  } else {
    return false;
  }
}
function checkForWin(startStack, endStack) {
  if (stacks.c.length == 4 || stacks.b.length == 4) {
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    console.log("about to move a piece");
    movePiece(startStack, endStack);
  } else {
    console.log("is legal return false");
    false;
  }
  if (checkForWin()) {
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
}

function getPrompt() {
  printStacks();
  rl.question("start stack: ", startStack => {
    rl.question("end stack: ", endStack => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#towersOfHanoi()", () => {
    it("should be able to move a block", () => {
      towersOfHanoi("a", "b");
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe("#isLegal()", () => {
    it("should not allow an illegal move", () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal("a", "b"), false);
    });
    it("should allow a legal move", () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal("a", "c"), true);
    });
  });
  describe("#checkForWin()", () => {
    it("should detect a win", () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {
  getPrompt();
}
