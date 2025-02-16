import { useState, useEffect } from 'react';
import './ScoreBar.css';

function ScoreBar({ resultState: [finalResult, setFinalResult] }) {

  useEffect(() => {
    
  }, [finalResult]);

  let endings = { 
    WIN: ['🏆', 'YOU WON!', 'green'], 
    LOSS: ['🥀', 'YOU LOST', 'orange'], 
    DRAW: ['⚖️', "IT'S A DRAW", 'lightgray'] 
  };

  const resultMap = {
      '🏔️': { '📄': endings.LOSS, '✂️': endings.WIN },
      '📄': { '✂️': endings.LOSS, '🏔️': endings.WIN },
      '✂️': { '🏔️': endings.LOSS, '📄': endings.WIN }
  };

  const props = {
    className: 'score-bar',
  };
  
  return (
    <div {...props}>
    </div>
  );
}

export default ScoreBar;
