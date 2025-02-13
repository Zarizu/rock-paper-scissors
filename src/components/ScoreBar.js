import { useState, useEffect } from 'react';
import './ScoreBar.css';

function ScoreBar({ options, setOptions }) {

  //useEffect(() => console.log("clicqdeo"), options[0]);

  const props = {
    className: 'score-bar',
  };
  
  return (
    <div {...props}>
    </div>
  );
}

export default ScoreBar;
