import React, { useState } from 'react';
import './ColorCard.css';
import ColorCard from './ColorCard';

function CardBar({ options, setOptions }) {
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
        <ColorCard option="🏔️" options={options} setOptions={setOptions} />
        <ColorCard option="📄" options={options} setOptions={setOptions} />
        <ColorCard option="✂️" options={options} setOptions={setOptions} />
    </div>
  );
}

export default CardBar;
