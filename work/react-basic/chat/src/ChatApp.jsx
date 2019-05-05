import React from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

class ChatApp extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[
                {Emma: "Emma"},
                {Gavin: "Gavin"}
            ],
            messages: [
                {sender: "Emma", timestamp:new Date().toString(), text:"Hello"},
                {sender: "Gavin", timestamp:new Date().toString(), text:"Bye"}
            ]
        };
        this.addMessage = this.addMessage.bind(this);
    };

    addMessage(user, text, timestamp){
        if(!text)
            return;
        const message = {
            sender: user,
            timestamp: timestamp,
            text: text,
        }
        this.setState({
            messages: this.state.messages.concat(message)
        });
    }

    render(){
        return (
            <div id="chat-app">
                <div className="display-panel">
                    <UserList users={this.state.users}/>
                    <MessageList messages={this.state.messages}/>
                </div>
                <SendMessage addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default ChatApp;