// アンパンの画像パス
const IMG_PATH01 = '/anpan.png'

import React, { useState } from 'react';

const TwoDimensionalArray: React.FC = () => {
  const twoDimensionalArray: number[][] = [];
  const [clicked, setClicked] = useState<number[][]>(Array(8).fill(Array(8).fill(0)));

  for (let i = 0; i < 8; i++) {
    twoDimensionalArray[i] = [];
    for (let j = 0; j < 8; j++) {
      twoDimensionalArray[i][j] = 0;
    }
  }

  twoDimensionalArray[3][3] = 0;
  twoDimensionalArray[3][4] = 1;
  twoDimensionalArray[4][3] = 1;
  twoDimensionalArray[4][4] = 0;

  const handleClick = (i: number, j: number) => {
    setClicked((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[i][j] = prevState[i][j] === 1 ? 0 : 1;
      return newState;
    });
  };

  return (
    <div className="grid-container">
      <table>
        <tbody>
          {twoDimensionalArray.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j} onClick={() => handleClick(i, j)}>
                  {clicked[i][j] === 1 ? (
                    <div className="grid-item-active">
                      <img
                        src={IMG_PATH01}
                        alt="your-image"
                        style={{
                          display: 'block',
                          margin: '0 auto',
                          maxWidth: '100%',
                          maxHeight: '100%',
                        }}
                      />
                    </div>
                  ) : (
                    <div className="grid-item-inactive" />
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
export default TwoDimensionalArray;
