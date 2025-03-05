import './ScoreRound.css';

function ScoreRound({ result }) {
    const resultCard = result || [];
    
    const props = {
      className: 'score-round',
      style: { backgroundColor: resultCard[2] }
    };
    
    return (
    
      <div {...props} >
        {resultCard[0]}
      </div>
    );
  }

  export default ScoreRound;
