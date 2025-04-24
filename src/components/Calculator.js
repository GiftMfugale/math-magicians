import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (butttonName) => {
    setCalcData(calculate(calcData, butttonName));
  };

  const { total, next } = calcData;
  const result = next || total || '0';

  return (
    <div className="calculator">
      <p>
        Let&apos;s  do some math!
      </p>
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input
                type="text"
                value={result}
                name="result"
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => handleClick('AC')}>AC</button></td>
            <td><button type="button" onClick={() => handleClick('+/-')}>+/-</button></td>
            <td><button type="button" onClick={() => handleClick('%')}>%</button></td>
            <td><button type="button" onClick={() => handleClick('/')}>/</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => handleClick('7')}>7</button></td>
            <td><button type="button" onClick={() => handleClick('8')}>8</button></td>
            <td><button type="button" onClick={() => handleClick('9')}>9</button></td>
            <td><button type="button" onClick={() => handleClick('x')}>x</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => handleClick('4')}>4</button></td>
            <td><button type="button" onClick={() => handleClick('5')}>5</button></td>
            <td><button type="button" onClick={() => handleClick('6')}>6</button></td>
            <td><button type="button" onClick={() => handleClick('-')}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={() => handleClick('1')}>1</button></td>
            <td><button type="button" onClick={() => handleClick('2')}>2</button></td>
            <td><button type="button" onClick={() => handleClick('3')}>3</button></td>
            <td><button type="button" onClick={() => handleClick('+')}>+</button></td>
          </tr>
          <tr>
            <td colSpan={2}><button type="button" onClick={() => handleClick('0')}>0</button></td>
            <td><button type="button" onClick={() => handleClick('.')}>.</button></td>
            <td><button type="button" onClick={() => handleClick('=')}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
