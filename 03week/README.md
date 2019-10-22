1. move piece function
- first I console.log the startStack and endStack to make sure the computer is reading it when inside the towersOfHanoi function.
- I created a variable to contain the piece popped off the startStack.
- I then return the endStack with the newly popped piece puhed onto the array.

2. Is legal function
- Again I first make sure the function is being read inside of the towersOfHanoi function
- Next I create three variables, two of which  comtain the values inside each the startStack and endStack. The other function is used to keep track of the length of the endStack.
- I then set the rules stating you are able to place a piece if endLength == 0 but not if the startStack was == 0. Also a rule stating that it is an illegal move if the final value in the startStack is > the endStacks final value.

3. checkForWin function
- If the length of stack b or c == 4 then it will return true as a win

4. towersOFHanoi function
- if the move is legl then allow the piece to move
- if checkforWin is true then reset the board to its default position
