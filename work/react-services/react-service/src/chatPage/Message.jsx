import React from 'react';

const Message =({message}) =>{
    return (
        <li>
            <div className="message">
            <div className="meta-info">
                <div className="sender-info">
                <span className="username">{message.sender}</span>
                </div>
                <div className="message-info">
                <span className="timestamp">{message.timestamp}</span>
                </div>
            </div>
            <p className="message-text">{message.text}</p>
            </div>
        </li>
    );
};

export default Message;
