import React from 'react';


const TwoDimensionalArray: React.FC = () => {
  const twoDimensionalArray: number[][] = [];

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

  return (
    <div className="grid-container">
      <table>
        <tbody>
          {twoDimensionalArray.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <td key={j} className={col === 1 ? 'grid-item-active' : 'grid-item-inactive'} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TwoDimensionalArray;
