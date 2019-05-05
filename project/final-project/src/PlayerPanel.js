import React from 'react';
import PlayerOne from './DiceElements/PlayerOne';
import PlayerTwo from './DiceElements/PlayerTwo';
import NewButton from './DiceElements/NewButton';
import RollButton from './DiceElements/RollButton';
import HoldButton from './DiceElements/HoldButton';
import DiceImg from './DiceElements/DiceImg';


class PlayerPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            player1_name: props.p1_name,
            player2_name: props.p2_name,
            registered: props.registered,
            p1_score: 0,
            p2_score: 0,
            p1_roundScore: 0,
            p2_roundScore: 0,
            diceImg: 0,
            activePlayer: "Player1",
            gameNow: true,
        }
        this.rollButton_ClickListener = this.rollButton_ClickListener.bind(this);
        this.holdButton_ClickListener = this.holdButton_ClickListener.bind(this);
        this.newButton_ClickListener = this.newButton_ClickListener.bind(this);
    }

    componentWillReceiveProps(props){
        this.setState({
            player1_name: props.p1_name,
            player2_name: props.p2_name,
            registered: props.registered,
        })
    }

    // randomDice(){
    //     let num = Math.floor(Math.random() * 6 +1);
    //     this.setState({diceImg: num});
    // }
    
    rollButton_ClickListener(){
        if(this.state.gameNow && this.state.registered){
            let num = Math.floor(Math.random() * 6 +1);
            this.setState({diceImg: num},()=>{
                if(this.state.diceImg !== 1){
                    switch(this.state.activePlayer){
                        case "Player1":
                            this.setState({p1_roundScore: this.state.p1_roundScore + this.state.diceImg});
                            break;
                        case "Player2":
                            this.setState({p2_roundScore: this.state.p2_roundScore + this.state.diceImg});
                            break;
                        default: break;
                    }
                }else {
                    this.nextPlayer();
                }
            });
        }
    }

    nextPlayer(){
        this.setState({
            activePlayer: (this.state.activePlayer === "Player1") ? "Player2" : "Player1",
            p1_roundScore: 0,
            p2_roundScore: 0,
        })
    }

    holdButton_ClickListener(){
        if(this.state.gameNow && this.state.registered){
            switch(this.state.activePlayer){
                case "Player1":
                    const score_1 = this.state.p1_score+this.state.p1_roundScore;
                    if(score_1 >=30){
                        this.setState({
                            p1_score: "Winner",
                            p1_roundScore: 0,
                            gameNow: false
                        });
                    }else{
                        this.setState({
                            p1_score: score_1,
                            p1_roundScore: 0,
                        })
                        this.nextPlayer();
                    }
                    break;
                case "Player2":
                    const score_2 = this.state.p2_score+this.state.p2_roundScore;
                    if(score_2 >=30){
                        this.setState({
                            p2_score: "Winner",
                            p2_roundScore: 0,
                            gameNow: false
                        });
                    }else{
                        this.setState({
                            p2_score: score_2,
                            p2_roundScore: 0,
                        })
                        this.nextPlayer();
                    }
                    break;
                default: break;
            }  
        }
    }

    newButton_ClickListener(){
        if(this.state.registered)
            this.init();
    }

    init(){
        this.setState({
            p1_score: 0,
            p2_score: 0,
            p1_roundScore: 0,
            p2_roundScore: 0,
            activePlayer: "Player1",
            gameNow: true,
        })
    }

    render(){
        return (
            <div className="wrapper clearfix">
                <PlayerOne 
                    p1_name={this.state.player1_name} 
                    p1_score={this.state.p1_score}
                    p1_roundScore={this.state.p1_roundScore} 
                    active={this.state.activePlayer}/>
                <PlayerTwo 
                    p2_name={this.state.player2_name} 
                    p2_score={this.state.p2_score}
                    p2_roundScore={this.state.p2_roundScore} 
                    active={this.state.activePlayer}/>
                <NewButton clicked={this.newButton_ClickListener}/>
                <RollButton clicked={this.rollButton_ClickListener}/>
                <HoldButton clicked={this.holdButton_ClickListener}/>
                <DiceImg 
                    diceNum={this.state.diceImg} 
                    p1_roundScore={this.state.p1_roundScore}
                    p2_roundScore={this.state.p2_roundScore}
                    status={this.state.gameNow}
                    />
            </div>
        )
    }
} 

export default PlayerPanel;