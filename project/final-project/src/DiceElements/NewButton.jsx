import React from 'react';

const NewButton = ({clicked}) => {
    return (
        <button className="btn-new" onClick={clicked}>
            <i className="ion-ios-plus-outline"></i>
            New game
        </button>
    )
}

export default NewButton;