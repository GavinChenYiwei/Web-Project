import React from 'react';
import UserList from './chatPage/UserList';
import MessageList from './chatPage/MessageList';
import SendMessage from './chatPage/SendMessage';
import {getMessages, postMessage} from './services';

class ChatApp extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[
                {Emma: "Emma"},
                {Gavin: "Gavin"}
            ],
            messages: []
        };
        this.fetchMessages();
        this.fetchMessages = this.fetchMessages.bind(this);
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
        postMessage(message)
        .then((messages) => {
            console.log(messages);
            this.setState({messages})
        })
    }

    fetchMessages(){
        getMessages().then(messages => {
            this.setState({messages: messages})
        })
    }


    componentDidMount(){
        setInterval(this.fetchMessages,5000);
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
