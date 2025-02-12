import { useState, useEffect } from 'react';
import './App.css';
import CardBar from './components/CardBar';
import GameView from './components/GameView';

function App() {
  const [options, setOptions] = useState(['▶', '']);

  return (
    <div className="App">
      <div className="score"></div>
      <GameView options={options} />
      <CardBar options={options} setOptions={setOptions} />
    </div>
  );
}

export default App;
