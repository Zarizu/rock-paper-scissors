import './GameView.css';

function GameView({ options }) {
    const emojis = ['🏔️', '📄', '✂️'];
    let option = emojis[Math.floor(Math.random() * emojis.length)];

    let result = { 
        WIN: ['🏆', 'YOU WON!', 'green'], 
        LOSS: ['🥀', 'YOU LOST', 'orange'], 
        DRAW: ['⚖️', "IT'S A DRAW", 'lightgray'] 
    };

    const results = {
      '🏔️': { '📄': result.LOSS, '✂️': result.WIN },
      '📄': { '✂️': result.LOSS, '🏔️': result.WIN },
      '✂️': { '🏔️': result.LOSS, '📄': result.WIN }
    };

    result = results[option][options[1]] || result.DRAW;
    console.log(...result);
    
    const props = {
        className: "game",
        style: { backgroundColor: result[2] },
    };
  
    return (
        <div {...props}> {
            options[1] === '' ? ( <div>{options[0]}</div> ) : (
            <>
              <div>{result[0]}</div>
              <p>{result[1]}</p>
            </>
          )}
        </div>
    );

}

export default GameView;
