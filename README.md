# Tutorial: Tic-tac-toe

A small tic-tac-toe game that demonstrates the fundamental concepts of React.

## Game rules
Tic-tac-toe is a two player game played on a three by three grid. The aim of the game is to place three symbols of the same type in a horizontal, vertical, or diagonal line on the grid. Each player is assigned a symbol, either an "X" or "0", and takes alternating turns to fill the nine spaces of the grid. Symbols can only be placed on empty grid spaces and a game concludes when all the spaces are filled or a line of matching symbols is formed.

## Specifications
- A 3x3 grid:
    - Grid spaces should start empty.
    - Each space should take one of two values: "X", or "0".
    - A value should be placed with a mouse.
    - Only empty spaces can receive a mouse event.
- Player turns:
    - Turns should alternate between players.
- Game state:
    - The current player's turn should be indicated.
    - A game should end when 3 matching values form a horizontal, vertical, or diagonal line.
    - The winner should be indicated.
    - A game should end when there are no empty spaces.

### Extra features
- Turn history:
    - The grid state should be saved after each move.
    - Moves should be displayed in a list.
    - Buttons assigned to each move should allow the associated grid state to be displayed.