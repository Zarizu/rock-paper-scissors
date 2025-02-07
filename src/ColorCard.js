import React, { useState, useEffect } from 'react';
import './styles/ColorCard.css';



function ColorCard({option, setResult }) {
  const options = ['🏔️', '📄', '✂️'];
  const end = { WIN: ['🏆', 'YOU WON!'], LOSS: ['🥀', 'YOU LOST'], DRAW: ['⚖️', "IT'S A DRAW"] };
  const colorMap = {
    '🏔️': 'blue',
    '📄': 'yellow',
    '✂️': 'red'
  };
  const color = colorMap[option] || 'gray';
  const icon = option;

  const handleClick = () => {
    let result = options[Math.floor(Math.random() * options.length)];
    const results = {
      '🏔️': { '📄': end.LOSS, '✂️': end.WIN },
      '📄': { '✂️': end.LOSS, '🏔️': end.WIN },
      '✂️': { '🏔️': end.LOSS, '📄': end.WIN }
    };

    result = results[option][result];
    if (!result) result = end.DRAW;
  
    console.log(result);
    setResult(result);
  };
  
  return (
    <div>
      <button
        style={{ '--color': color }}
        onClick={handleClick}
      >
        {icon}
      </button>
    </div>
  );
}

export default ColorCard;
