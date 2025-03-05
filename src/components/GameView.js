import { useState, useEffect, useRef } from "react";
import "./GameView.css";

function GameView({
    versus: [player, enemy],
    setVersus: [setPlayer, setEnemy],
    resultState: [result, setResult]}) {


    
    const emojis = ['🏔️', '📄', '✂️'];
    const [Id, option] = player;
    const viewTimeRef = useRef(null);

    useEffect(() => {
        if (!(emojis.includes(option))) return;

        if (viewTimeRef.current) clearTimeout(viewTimeRef.current);

        const newEnemy = emojis[Math.floor(Math.random() * emojis.length)];
        setEnemy(newEnemy);
        setResult(PlayGame(option, newEnemy));

        viewTimeRef.current = setTimeout(() => {
            setPlayer([false,'']);
            setEnemy('');
            setResult('▶');
        }, 2 * 1000);
        
    }, [Id]);

    return (
        <div className="game" style={{ backgroundColor: result[2] }}>
            {
                (emojis.includes(option))
                ? <div> {option} vs {enemy} </div>
                : <div>
                    {result[0]}
                    {result[1]}
                  </div>
            }
        </div>
    );
}

function PlayGame(option, enemy) {
    let round = { 
        WIN: ['🏆', 'YOU WON!', 'green'], 
        LOSS: ['🥀', 'YOU LOST', 'orangered'], 
        DRAW: ['⚖️', "IT'S A DRAW", 'lightgray'] 
    };

    const resultMap = {
        '🏔️': { '📄': round.LOSS, '✂️': round.WIN },
        '📄': { '✂️': round.LOSS, '🏔️': round.WIN },
        '✂️': { '🏔️': round.LOSS, '📄': round.WIN }
    };

    const result = resultMap[option]?.[enemy] || round.DRAW;

    console.log('');
    console.log(`${option} ✖️ ${enemy}`);
    console.log(...result);
    return result;
}

export default GameView;
