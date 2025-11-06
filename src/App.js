import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState([]);
  const [sum, setSum] = useState("");

  const ClickedBtn = (value) => {
    if (value === "C") {
      setInput([]);
      setSum("");
    } else if (value === "=") {
      if (input.length === 0) {
        setSum("Error");
      } else {
        try {
          const result = eval(input);
          setSum(result.toString());
        } catch (error) {
          setSum("Error");
        }
      }
    } else {
      setInput((prev) => prev + value);
    }
  };
  

  return (
    <div className='body_div'>
      <div className='calculator'>
        <h1>React Calculator</h1>
        {/* <input type='text' className='calculator-screen'/> */}
        <input type='text' className='calculator-screen' value={input}/>
        <div className='input_show'>{sum}</div>
        <div className='buttons'>
          <div className='btn_div_1'>
            <button className='btn' onClick={() => ClickedBtn(7)}>7</button>
            <button className='btn' onClick={() => ClickedBtn(8)}>8</button>
            <button className='btn' onClick={() => ClickedBtn(9)}>9</button>
            <button className='btn' onClick={() => ClickedBtn('+')}>+</button>
          </div>
          <div className='btn_div_1'>
            <button className='btn' onClick={() => ClickedBtn(4)}>4</button>
            <button className='btn' onClick={() => ClickedBtn(5)}>5</button>
            <button className='btn' onClick={() => ClickedBtn(6)}>6</button>
            <button className='btn' onClick={() => ClickedBtn('-')}>-</button>
          </div>
          <div className='btn_div_1'>
            <button className='btn' onClick={() => ClickedBtn(1)}>1</button>
            <button className='btn' onClick={() => ClickedBtn(2)}>2</button>
            <button className='btn' onClick={() => ClickedBtn(3)}>3</button>
            <button className='btn' onClick={() => ClickedBtn('*')}>* </button>
          </div>
          <div className='btn_div_1'>
            <button className='btn' onClick={() => ClickedBtn('C')}>C</button>
            <button className='btn' onClick={() => ClickedBtn(0)}>0</button>
            <button className='btn' onClick={() => ClickedBtn('=')}>=</button>
            <button className='btn' onClick={() => ClickedBtn('/')}>/</button>
          </div>
        </div>
      </div>
    </div>
    // <>
    // <Calculator/>
    // </>
  );
}

export default App;
