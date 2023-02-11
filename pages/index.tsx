import React, { useState } from 'react';

const ANPAN_IMAGE_PATH: string = '/anpan.png';
const ANPAN_GRAY_IMAGE_PATH: string = '/anpan_gray.png';

const Reversi: React.FC = () => {
  const [twoDimensionalArray, setTwoDimensionalArray] = useState<number[][]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  // 2D array initialization
  if (twoDimensionalArray.length === 0) {
    for (let i = 0; i < 8; i++) {
      twoDimensionalArray[i] = [];
      for (let j = 0; j < 8; j++) {
        if (i === 3 && j === 3 || i === 4 && j === 4) {
          twoDimensionalArray[i][j] = 1;
        } else if (i === 3 && j === 4 || i === 4 && j === 3) {
          twoDimensionalArray[i][j] = 0;
        } else {
          twoDimensionalArray[i][j] = -1;
        }
      }
    }
  }

  const isValidMove = (i: number, j: number): boolean => {
    if (twoDimensionalArray[i][j] !== -1) {
      return false;
    }
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) {
          continue;
        }
        let row = i + x;
        let col = j + y;
        if (row >= 0 && row < 8 && col >= 0 && col < 8 && twoDimensionalArray[row][col] === (currentPlayer + 1) % 2) {
          row += x;
          col += y;
          while (row >= 0 && row < 8 && col >= 0 && col < 8 && twoDimensionalArray[row][col] === (currentPlayer + 1) % 2) {
            row += x;
            col += y;
          }
          if (row >= 0 && row < 8 && col >= 0 && col < 8 && twoDimensionalArray[row][col] === currentPlayer) {
            return true;
          }
        }
      }
    }
    return false;
  };
  const handleClick = (i: number, j: number) => {
    if (isValidMove(i, j)) {
      let updatedArray = [...twoDimensionalArray];
      updatedArray[i][j] = currentPlayer;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) {
            continue;
          }
          let row = i + x;
          let col = j + y;
          if (row >= 0 && row < 8 && col >= 0 && col < 8 && twoDimensionalArray[row][col] === (currentPlayer + 1) % 2) {
            flipTiles(row, col, updatedArray, x, y, currentPlayer);
          }
        }
      }
      setTwoDimensionalArray(updatedArray);
      setCurrentPlayer((currentPlayer + 1) % 2);
    }
  };

  const flipTiles = (row: number, col: number, updatedArray: number[][], x: number, y: number, currentPlayer: number) => {
    let shouldFlip = false;
    while (row >= 0 && row < 8 && col >= 0 && col < 8) {
      if (updatedArray[row][col] === currentPlayer) {
        shouldFlip = true;
        break;
      } else if (updatedArray[row][col] === (currentPlayer + 1) % 2) {
        row += x;
        col += y;
      } else {
        break;
      }
    }
    if (shouldFlip) {
      row -= x;
      col -= y;
      while (row >= 0 && row < 8 && col >= 0 && col < 8 && updatedArray[row][col] === (currentPlayer + 1) % 2) {
        updatedArray[row][col] = currentPlayer;
        row -= x;
        col -= y;
      }
    }
  };





  const renderBoard = () => {
    return (
      <table>
        <tbody>
          {twoDimensionalArray.map((rowArray, i) => (
            <tr key={i}>
              {rowArray.map((cell, j) => (
                <td key={j} onClick={() => handleClick(i, j)} style={{ width: '50px', height: '50px', border: 'solid 1px black' }}>
                  {cell === -1 ? (
                    <p style={{ width: '50px', height: '50px' }}></p>
                  ) : cell === 0 ? (
                    <img src={ANPAN_IMAGE_PATH} alt='black' style={{ width: '50px', height: '50px' }} />
                  ) : (
                    <img src={ANPAN_GRAY_IMAGE_PATH} alt='white' style={{ width: '50px', height: '50px' }} />
                  )}
                </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Reversi Game</h1>
      {renderBoard()}
      <p>Current Player: {currentPlayer === 0 ? 'Black' : 'White'}</p>
    </div>

  );
};

export default Reversi;