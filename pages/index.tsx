import React, { useState } from 'react';

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

  const [imgPath1, setImgPath1] = useState<string>('/anpan.png');
  const [imgPath2, setImgPath2] = useState<string>('/anpan_gray.png');

  const handleClick = (i: number, j: number) => {
    if (twoDimensionalArray[i][j] === -1) {
      const updatedArray = [...twoDimensionalArray];
      updatedArray[i][j] = currentPlayer;
      setTwoDimensionalArray(updatedArray);
      setCurrentPlayer((prev) => (prev + 1) % 2);
    }
  };

  return (
    <div className="grid-container">
      <table>
        <tbody>
          {twoDimensionalArray.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j}>
                  {col !== -1 ? (
                    <div
                      className={col === 1 ? 'grid-item-active' : 'grid-item-inactive'}
                      onClick={() => handleClick(i, j)}
                    >
                      <img
                        src={col === 0 ? imgPath1 : imgPath2}
                        alt="grid-item"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  ) : (
                    <div className="grid-item-inactive" onClick={() => handleClick(i, j)} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reversi;
