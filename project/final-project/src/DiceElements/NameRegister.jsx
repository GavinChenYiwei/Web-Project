import React from 'react';

class NameRegister extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: props.registered
        }
    }

    componentWillReceiveProps(props){
        this.setState({active: props.registered});
    }

    render(){
        return (
            <div className="register-name">
                    <div className="Player1">
                        <label>P1: </label>
                        <input disabled={this.state.active} placeholder="Enter player1 name" ref="Name1"></input>
                    </div>
                    <div className="Player2">
                        <label>P2: </label>
                        <input disabled={this.state.active} placeholder="Enter player2 name" ref="Name2"></input>
                    </div>
                <button disabled={this.state.active} onClick={()=>{
                    this.props.GetStates(this.refs.Name1.value, this.refs.Name2.value);
                }}>Register</button>
            </div>
        )
    }
}

export default NameRegister;