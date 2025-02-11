import React, { useState } from 'react';
import './styles/ColorCard.css';
import ColorCard from './ColorCard';

function CardBar({ setResult }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) return;
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 0.3 * 1000);
  };

  const BarProp = {
    className: 'card-bar',
    onClick: handleClick,
    style: { pointerEvents: isDisabled ? 'none' : 'auto' },
  };
  
  
  return (
    <div {...BarProp}>
        <ColorCard option="🏔️" setResult={setResult} />
        <ColorCard option="📄" setResult={setResult} />
        <ColorCard option="✂️" setResult={setResult} />
    </div>
  );
}

export default CardBar;
