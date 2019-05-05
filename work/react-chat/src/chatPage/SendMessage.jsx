import React from 'react';

class SendMessage extends React.Component{
    constructor(){
        super();
        this.state = {
            data:"",
            username:""
        }
    }

    render() {
        return (
            <div className="outgoing">
                <form onSubmit={
                    (e)=>{
                        e.preventDefault();
                        this.props.addMessage(this.state.username, this.refs.theInput.value, new Date().toString());
                        this.refs.theInput.value = "";
                    }
                }>
                <input className="to-send" disabled={!this.props.currentUsr} placeholder="Enter message to send" ref="theInput"
                onChange={e => this.setState({ data: e.target.value })}
                />
                <button onClick={
                    (e)=>{
                        e.preventDefault();
                        this.props.addMessage(this.state.username, this.refs.theInput.value, new Date().toString());
                        this.refs.theInput.value = "";
                    }
                } disabled={!this.state.data} >Send</button>
                </form>
            </div>
        );
    }   
}

export default SendMessage;