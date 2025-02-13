import React, { useState } from 'react';
import './ColorCard.css';
import ColorCard from './ColorCard';

function CardBar({ setPlayer }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) return;
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 0.3 * 1000);
  };

  const props = {
    className: 'card-bar',
    onClick: handleClick,
    style: { pointerEvents: isDisabled ? 'none' : 'auto' },
  };
  
  
  return (
    <div {...props}>
        <ColorCard option="🏔️" setPlayer={setPlayer} />
        <ColorCard option="📄" setPlayer={setPlayer} />
        <ColorCard option="✂️" setPlayer={setPlayer} />
    </div>
  );
}

export default CardBar;
