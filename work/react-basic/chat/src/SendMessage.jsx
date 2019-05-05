import React from 'react';

class SendMessage extends React.Component{
    constructor(){
        super();
        this.state = {
            data:"",
            username:"Dummy"
        }
    }
    _handleChangeEvent(val) {
        return val;
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
                <input type="hidden" name="username" value={this.state.username}/>
                <input className="to-send" placeholder="Enter message to send" ref="theInput"
                onChange={()=>{this._handleChangeEvent(this.state.data)}}
                />
                </form>
            </div>
        );
    }   
}

export default SendMessage;