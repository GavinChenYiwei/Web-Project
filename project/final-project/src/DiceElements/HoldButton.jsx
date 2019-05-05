import React from 'react';

const HoldButton = ({clicked}) => {
    return (
        <button className="btn-hold" onClick={clicked}>
            <i className="ion-ios-download-outline"></i>
            Hold
        </button>
    )
}

export default HoldButton;