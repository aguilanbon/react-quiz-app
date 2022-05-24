import React, { useState } from 'react'

function Quiz({ setGameState }) {

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleClick = (isCorrect) => {

        if (isCorrect) {
            setCurrentScore(currentScore + 1)
        }

        let nextQuestion = currentQuestion + 1
        if (nextQuestion === questions.length) {
            setShowScore(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (
        <div className='quiz-container'>
            {showScore ? (
                <div className="score-container">
                    <h2>You scored</h2>
                    <h1>{currentScore} / {questions.length}</h1>
                    <button onClick={() => setGameState('menu')}>Start Again</button>
                </div>
            ) :
                (
                    <>
                        <div className="left-col">
                            <h2>Question {currentQuestion + 1} / {questions.length}</h2>
                            <h3>{questions[currentQuestion].questionText}</h3>
                        </div>
                        <div className="right-col">
                            {questions[currentQuestion].answerOptions.map((choices, index) => (
                                <button key={index} onClick={() => handleClick(choices.isCorrect)}>{choices.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
        </div>
    )
}

export default Quiz