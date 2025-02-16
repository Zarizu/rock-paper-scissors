import './ColorCard.css';

function ColorCard({ option, setPlayer }) {
  const colorMap = {
    '🏔️': 'blue',
    '📄': 'yellow',
    '✂️': 'red',
  };
  const color = colorMap[option] || 'gray';

  const handleClick = () => setPlayer([Math.random(), option]);

  const props = {
    className: "color-card",
    style: { '--color': color },
    onClick: handleClick,
  };
  
  return (
    <div {...props}>
      <button>
        {option}
      </button>
    </div>
  );
}

export default ColorCard;
