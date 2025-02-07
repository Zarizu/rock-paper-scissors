import { useState, useEffect } from 'react';
import './styles/App.css';
import ColorCard from './ColorCard';

function App() {
  const [result, setResult] = useState(['▶', '']);

  const results = {
    '🏆': 'green',
    '🥀': 'orange',
    '⚖️': 'lightgray',
  };

  const backgroundColor = results[result[0]] || 'white';

  return (
    <div className="App">
      <div className="score"></div>
      <div className="game" style={{ backgroundColor: backgroundColor }}>
        <div>{result[0]}</div>
        <p>{result[1]}</p>
      </div>
      <div className="bar">
        <ColorCard option="🏔️" setResult={setResult} />
        <ColorCard option="📄" setResult={setResult} />
        <ColorCard option="✂️" setResult={setResult} />
      </div>
    </div>
  );
}

export default App;
