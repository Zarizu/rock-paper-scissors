import { useState, useEffect } from 'react';
import './App.css';
import CardBar from './components/CardBar';
import GameView from './components/GameView';
import ScoreBar from './components/ScoreBar';

function App() {
  const [enemy, setEnemy] = useState('▶');
  const [player, setPlayer] = useState('');
  const [finalResult, setFinalResult] = useState('');
  
  return (
    <div className="App">
      <GameView 
        versus={[player, enemy]} 
        setVersus={[setPlayer, setEnemy]} 
        resultState={[finalResult, setFinalResult]}
      />
      <ScoreBar />
      <CardBar setPlayer={setPlayer} />
    </div>
  );
}

export default App;
