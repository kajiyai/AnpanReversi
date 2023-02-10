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
                <td key={j}>
                  {col === 1 ? (
                    <div className="grid-item-active">
                      <img
                        // anpan img
                        src={'/anpan.png'}
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
