import { useState, useEffect } from 'react';
import './styles/App.css';
import CardBar from './CardBar';

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
      <CardBar setResult={setResult}/>
    </div>
  );
}

export default App;
