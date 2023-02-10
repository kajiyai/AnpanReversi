import React, { useState } from 'react';

const TwoDimensionalArray: React.FC = () => {
  const [twoDimensionalArray, setTwoDimensionalArray] = useState<number[][]>([]);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [imgPath1, setImgPath1] = useState<string>('/anpan.png');
  const [imgPath2, setImgPath2] = useState<string>('/anpan_gray.png');

  // 2次元配列の初期化
  if (twoDimensionalArray.length === 0) {
    for (let i = 0; i < 8; i++) {
      twoDimensionalArray[i] = [];
      for (let j = 0; j < 8; j++) {
        twoDimensionalArray[i][j] = 0;
      }
    }
  }

  const handleClick = (i: number, j: number) => {
    const updatedArray = [...twoDimensionalArray];
    updatedArray[i][j] = updatedArray[i][j] === 0 ? 1 : 0;
    setTwoDimensionalArray(updatedArray);
  };

  return (
    <div className="grid-container">
      <table>
        <tbody>
          {twoDimensionalArray.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j}>
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
