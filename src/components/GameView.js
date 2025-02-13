import { useState, useEffect } from "react";
import "./GameView.css";

function GameView({ versus: [player, enemy], setVersus: [setPlayer, setEnemy] }) {
    const [finalResult, setFinalResult] = useState('');
    const emojis = ['🏔️', '📄', '✂️'];

    useEffect(() => {
        if (emojis.includes(player)) {
            const newEnemy = emojis[Math.floor(Math.random() * emojis.length)];
            setEnemy(newEnemy);
            setFinalResult(PlayGame(player, newEnemy));
            
            setTimeout(() => setPlayer(''), 0 * 1000);
        }
    }, [player]);

    return (
        <div className="game" style={{ backgroundColor: finalResult[2] }}>
            <div>{enemy}</div>
            <p>{finalResult[0]}</p>
            <p>{finalResult[1]}</p>
        </div>
    );
}

function PlayGame(player, enemy) {
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

    const finalResult = resultMap[player]?.[enemy] || endings.DRAW;

    console.log('');
    console.log(`${player} vs ${enemy}`);
    console.log(finalResult[0], finalResult[1]);
    return finalResult;
}

export default GameView;
