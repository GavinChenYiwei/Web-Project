import React from 'react';
import GameStatus from './DiceElements/GameStatus';
import PlayerPanel from './PlayerPanel';
import NameRegister from './DiceElements/NameRegister';
import {getPlayers, addPlayers} from './services';

class DiceApp extends React.Component{
    constructor(){
        super();
        this.state = {
            gameList: [],
            p1_name: "Player 1",
            p2_name: "Player 2",
            registered: false,
        }

        this.getPlayerList();
        this.handleRegister = this.handleRegister.bind(this);
        this.getPlayerList = this.getPlayerList.bind(this);
    }

    componentDidMount(){
        setInterval(this.getPlayerList,5000);
    }

    handleRegister(p1_name, p2_name){
        if(p1_name && p2_name){
            this.setState({
                p1_name: p1_name,
                p2_name: p2_name,
                registered: true,
            });
        };
        const battle={
            player1: p1_name,
            player2: p2_name,
        };
        addPlayers(battle)
        .then(players=>{
            console.log("1");
            this.setState({gameList: players})
        })
    }

    getPlayerList(){
        getPlayers()
        .then(players=>{
            this.setState({gameList: players})
        })
    }

    render(){
        return (
            <div className="dice-app">
                <GameStatus gameList={this.state.gameList}/>
                <PlayerPanel 
                    registered={this.state.registered}
                    p1_name={this.state.p1_name}
                    p2_name={this.state.p2_name}/>
                <NameRegister 
                    registered={this.state.registered}
                    GetStates={this.handleRegister}/>
            </div>
        )
    }
}

export default DiceApp;