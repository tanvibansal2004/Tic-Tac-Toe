// import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       //MAKE A COPY AND CHANGE THAT
  //       //STATES THAT DEPEND ON OBJECTS OR ARRAYS SHOULD BE UPDATED IN AN IMMUTABLE WAY.
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedGameBoard;

  //       //DO NOT USE LIKE THIS BECAUSE THIS UPDATES THE ORIGINAL GAMEBOARD AT ITS MEMORY AND CAN PRESENT BUGS OR SIDE EFFECTS.
  //       // prevGameBoard[rowIndex][colIndex] = 'X'
  //       // return prevGameBoard
  //     });
  //     onSelectSquare()
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
