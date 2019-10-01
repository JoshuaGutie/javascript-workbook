"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {
  // Write code here
}

function getPrompt() {
  rl.question("hand1: ", answer1 => {
    rl.question("hand2: ", answer2 => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === "function") {
  describe("#rockPaperScissors()", () => {
    it("should detect a tie", () => {
      assert.equal(rockPaperScissors("rock", "rock"), "It's a tie!");
      assert.equal(rockPaperScissors("paper", "paper"), "It's a tie!");
      assert.equal(rockPaperScissors("scissors", "scissors"), "It's a tie!");
    });
    it("should only allow 2 players", () => {
      assert.equal(
        rockPaperScissors("rock", "rock, rock"),
        "Only Two Players Please!"
      );
      assert.equal(
        rockPaperScissors("paper", "paper, paper"),
        "Only Two Players Please!"
      );
      assert.equal(
        rockPaperScissors("scissors", "scissors, scissors"),
        "Only Two Players Please!"
      );
    });
    it("should detect wrong choices", () => {
      assert.equal(
        rockPaperScissors("rock", "hammer"),
        "Hammer is not an option!"
      );
      assert.equal(
        rockPaperScissors("paper", "hammer"),
        "Hammer is not an option!"
      );
      assert.equal(
        rockPaperScissors("scissors", "hammer"),
        "Hammer is not an option!"
      );
    });
    it("should require two players", () => {
      assert.equal(rockPaperScissors("rock", " "), "One More Player Required");
      assert.equal(rockPaperScissors("paper", " "), "One More Player Required");
      assert.equal(
        rockPaperScissors("scissors", " "),
        "One More Player Required"
      );
    });
    it("should require input", () => {
      assert.equal(rockPaperScissors(" ", " "), "two More Player Required");
      assert.equal(rockPaperScissors(" ", " "), "two More Player Required");
      assert.equal(rockPaperScissors(" ", " "), "two More Player Required");
    });
    it("should insult loser  ", () => {
      assert.equal(
        rockPaperScissors("rock", "paper"),
        "paper Wins! Rock is an imbecile!"
      );
      assert.equal(
        rockPaperScissors("paper", "scissors"),
        "scissors Wins! Paper is an imbecile!"
      );
      assert.equal(
        rockPaperScissors("scissors", "rock"),
        "Rock Wins! scissors is an imbecile!"
      );
    });
    it("should detect which hand won", () => {
      assert.equal(rockPaperScissors("rock", "paper"), "Hand two wins!");
      assert.equal(rockPaperScissors("paper", "scissors"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock", "scissors"), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors("rOcK", " paper "), "Hand two wins!");
      assert.equal(rockPaperScissors("Paper", "SCISSORS"), "Hand two wins!");
      assert.equal(rockPaperScissors("rock ", "sCiSsOrs"), "Hand one wins!");
    });
  });
} else {
  getPrompt();
}
