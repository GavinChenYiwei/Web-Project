import React from 'react';
import UserList from './chatPage/UserList';
import MessageList from './chatPage/MessageList';
import SendMessage from './chatPage/SendMessage';
import LoginUser from './chatPage/LoginUser';
import {addUser, getUsers, removeUser, getMessages, postMessage} from './services';

class ChatApp extends React.Component {
    constructor() {
        super();
        this.state = {
            users:{},
            messages: [],
            currentUsr: "",
        };
        this.fetchMessages();
        this.fetchUsers();
        this.fetchUsers = this.fetchUsers.bind(this);
        this.fetchMessages = this.fetchMessages.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.addUser = this.addUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
    };

    addUser(user){
        if(!user)
            return;
        // eslint-disable-next-line 
        let name = new Object();
        name[user] = user;
        addUser(name)
        .then((user) => {
            let change = this.state.users;
            change[Object.keys(user)] = Object.keys(user);
            this.setState({users: change, currentUsr: Object.keys(user)})
        })
    };

    removeUser(user){
        removeUser(user)
        .then((users) => {
            this.setState({currentUsr: "", users:users});
            this.fetchUsers();
        })
    }

    addMessage(user, text, timestamp){
        if(!text)
            return;
        const message = {
            sender: this.state.currentUsr,
            timestamp: timestamp,
            text: text,
        }
        postMessage(message)
        .then((messages) => {
            this.setState({messages})
        })
    }

    fetchMessages(){
        getMessages().then(messages => {
            this.setState({messages: messages})
        })
    }

    fetchUsers(){
        getUsers().then(users => {
            this.setState({users: users})
        })
    }

    componentDidMount(){
        setInterval(this.fetchMessages,5000);
        setInterval(this.fetchUsers,5000);
    }

    render(){
        return (
            <div id="chat-app">
                <div className="user-in">
                    <LoginUser addUser={this.addUser} removeUser={this.removeUser} currentUsr={this.state.currentUsr}/>
                </div>
                <div className="display-panel">
                    <UserList users={this.state.users}/>
                    <MessageList messages={this.state.messages}/>
                </div>
                <div className="message-out">
                    <SendMessage addMessage={this.addMessage} currentUsr={this.state.currentUsr}/>
                </div>
            </div>
        )
    }
}

export default ChatApp;
