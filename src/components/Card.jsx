import React from 'react'

function Card() {
    return (
        <div className="card-container">
            <div className="left-col">
                <h2>Question 1 / 10</h2>
                <h3>What is the meaing of the first 'A' in the Abbreviation NASA?</h3>
            </div>
            <div className="right-col">
                <button>Amazing</button>
                <button>America</button>
                <button>Agriculture</button>
                <button>Antartica</button>
            </div>
        </div>
    )
}

export default Card