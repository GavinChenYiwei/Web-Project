import React from 'react';

const RollButton = ({clicked}) => {
    return (
        <button className="btn-roll" onClick={clicked}>
            <i className="ion-ios-loop"></i>
            Roll dice
        </button>
    )
}

export default RollButton;