import { useState, useEffect, useRef } from "react";
import "./GameView.css";

function GameView({ versus: [player, enemy], setVersus: [setPlayer, setEnemy], resultState: [finalResult, setFinalResult]}) {
    const emojis = ['🏔️', '📄', '✂️'];
    const [Id, option] = player;
    const viewTimeRef = useRef(null);

    useEffect(() => {
        if (!(emojis.includes(option))) return;

        if (viewTimeRef.current) clearTimeout(viewTimeRef.current);

        const newEnemy = emojis[Math.floor(Math.random() * emojis.length)];
        setEnemy(newEnemy);
        setFinalResult(PlayGame(option, newEnemy));

        viewTimeRef.current = setTimeout(() => {
            setPlayer([false,'']);
            setEnemy('▶');
            setFinalResult('');
        }, 2 * 1000);
        
    }, [Id]);

    return (
        <div className="game" style={{ backgroundColor: finalResult[2] }}>
            {
                (emojis.includes(option))
                ? <div>{option} vs {enemy}</div>
                : <div>{enemy}</div>
            }
        </div>
    );
}

function PlayGame(option, enemy) {
    let result = { 
        WIN: ['🏆', 'YOU WON!', 'green'], 
        LOSS: ['🥀', 'YOU LOST', 'orangered'], 
        DRAW: ['⚖️', "IT'S A DRAW", 'lightgray'] 
    };

    const resultMap = {
        '🏔️': { '📄': result.LOSS, '✂️': result.WIN },
        '📄': { '✂️': result.LOSS, '🏔️': result.WIN },
        '✂️': { '🏔️': result.LOSS, '📄': result.WIN }
    };

    const finalResult = resultMap[option]?.[enemy] || result.DRAW;

    console.log('');
    console.log(`${option} ✖️ ${enemy}`);
    console.log(finalResult[0], finalResult[1]);
    return finalResult;
}

export default GameView;
