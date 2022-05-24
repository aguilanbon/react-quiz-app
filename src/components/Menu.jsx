import React from 'react'

function Menu({ setGameState }) {
    return (
        <div className='menu-container'>
            <h1>Quiz App</h1>
            <button onClick={() => setGameState('quiz')}>Start Quiz</button>
        </div>
    )
}

export default Menu