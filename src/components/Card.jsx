import React, { useState } from 'react'
import Menu from './Menu';
import Quiz from './Quiz';

function Card() {

    const [gameState, setGameState] = useState('menu')

    return (
        <div className="card-container">
            {gameState === 'menu' && <Menu setGameState={setGameState} />}
            {gameState === 'quiz' && <Quiz setGameState={setGameState} />}
        </div>
    )
}

export default Card