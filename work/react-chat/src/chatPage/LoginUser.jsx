import React from 'react';

class LoginUser extends React.Component{
    constructor() {
        super();
        this.state = {
            users: "",
            hasLogin: false,
            hasUser: false
        }
    }

    render() {
        return (
            <div className="login-user">
                <form onSubmit={
                    (e)=>{
                        e.preventDefault();
                        this.props.addUser(this.state.users);
                    }
                }>
                <input className="login-user" placeholder="Enter username"
                onChange={e => this.setState({ users: e.target.value })} disabled={this.state.hasLogin}
                ref="currUser"
                />
                <button onClick={
                    (e)=>{
                        e.preventDefault();
                        this.props.addUser(this.state.users);
                        this.setState({hasUser: true});
                        this.setState({hasLogin:true});
                    }
                } disabled={this.state.hasUser}>Login</button>
                <button onClick={
                    (e)=>{
                        e.preventDefault();
                        this.props.removeUser(this.props.currentUsr);
                        this.refs.currUser.value = "";
                        this.setState({hasUser:false});
                        this.setState({hasLogin:false});
                    }
                } disabled={!this.state.hasLogin}>Logout</button>
                </form>
            </div>
        )
    }
}

export default LoginUser;