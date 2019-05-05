import React from 'react'

const GameStatus = ({gameList})=> {
    return (
        <div className="game-status-list">
            <p>Game Now</p>
            <ol>
                {gameList.map(gamePlayer => <li>{gamePlayer.player1} vs {gamePlayer.player2}</li>)}
            </ol>
        </div>
    )
}

export default GameStatus;