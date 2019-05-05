import React from 'react';

const PlayerOne = ({p1_name, p1_score, p1_roundScore, active}) => {
    const cname = (active === "Player1") ? "player-0-panel active" : "player-0-panel"
    return (
        <div className={cname}>
            <div className="player-name" id="name-0">{p1_name}</div>
            <div className="player-score" id="score-0">{p1_score}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score" id="current-0">{p1_roundScore}</div>
            </div>
        </div> 
    )
}

export default PlayerOne;