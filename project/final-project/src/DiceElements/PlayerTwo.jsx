import React from 'react';

const PlayerTwo = ({p2_name, p2_score, p2_roundScore, active}) => {
    const cname = (active === "Player2") ? "player-1-panel active" : "player-1-panel"
    return (
        <div className={cname}>
            <div className="player-name" id="name-1">{p2_name}</div>
            <div className="player-score" id="score-1">{p2_score}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score" id="current-1">{p2_roundScore}</div>
            </div>
        </div>
    )
}

export default PlayerTwo;