import React from 'react';
import Message from './Message';


const MessageList = ({messages})=>{
    return (
        <ol className="messages">
            {messages.map(message => <Message message={message}/>)}
        </ol>
    );
};

export default MessageList;