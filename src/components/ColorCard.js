import './ColorCard.css';

function ColorCard({ option, options, setOptions }) {
  const colorMap = {
    '🏔️': 'blue',
    '📄': 'yellow',
    '✂️': 'red'
  };
  const color = colorMap[option] || 'gray';
  const icon = option;

  const handleClick = () => setOptions([options[0], option]);

  const props = {
    className: "color-card",
    style: { '--color': color },
    onClick: handleClick, // Still needed, but now it's outside JSX
  };
  
  return (
    <div {...props}>
      <button>
        {icon}
      </button>
    </div>
  );
}

export default ColorCard;
