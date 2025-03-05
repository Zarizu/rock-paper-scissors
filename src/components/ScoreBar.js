import { useState, useEffect } from 'react';
import ScoreRound from './ScoreRound.js';
import './ScoreBar.css';

function ScoreBar({ resultState: [result, setResult] }) {
  const [score, setScore] = useState(Array(5).fill(null));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (result === '▶') return;
    if (count >= 5) return;

    setScore(prevScore => {
      const newScore = [...prevScore];
      newScore[count] = result;
      return newScore;
    });

    setCount(prevCount => prevCount + 1);
  }, [result]);

  useEffect(() => {
    if (count >= 5) finalResult(score, setResult);
  }, [count, score]);

  useEffect(() => {
    if (count == 0) return;
    console.log("Score atualizado:", score);
    console.log("Count atualizado:", count);
  }, [score, count]);

  return (
    <div className="score-bar">
      {score.map((_, index) => (
        <ScoreRound key={index} result={score[index] || null} />
      ))}
    </div>
  );
}

function finalResult(score, setResult) {
  let points = 0;
  let finalResult = { 
    WIN: ['🏆', 'YOU WON!', 'green'], 
    LOSS: ['🥀', 'YOU LOST', 'orangered'], 
    DRAW: ['⚖️', "IT'S A DRAW", 'lightgray'] 
  };
  score.forEach((result) => {
    if (result === '🏆') points++;
    if (result === '🥀') points--;
  });

  if (points > 0) setResult(finalResult.WIN);
  else if (points === 0) setResult(finalResult.DRAW)
  else setResult(finalResult.LOSS)
}

export default ScoreBar;
