import React from 'react';
import dice2 from '../img/dice-2.png';
import dice3 from '../img/dice-3.png';
import dice4 from '../img/dice-4.png';
import dice5 from '../img/dice-5.png';
import dice6 from '../img/dice-6.png';


class DiceImg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dice: props.diceNum,
            status: props.status,
            p1_roundScore: props.p1_roundScore,
            p2_roundScore: props.p2_roundScore
        }
    };

    componentWillReceiveProps(props){
        this.setState({
            dice: props.diceNum,
        })
    }

    render(){
        let dice = this.state.dice;
        let pic = "";
        const show = {display: "block"};
        const hide = {display: "none"}
        let style = {};
        switch(dice){
            case 1: style = hide; break;
            case 2: pic = dice2; style = show; break;
            case 3: pic = dice3; style = show; break;
            case 4: pic = dice4; style = show; break;
            case 5: pic = dice5; style = show; break;
            case 6: pic = dice6; style = show; break;
            default: style = hide;
        }
        return (
            <img src={pic} alt="Dice" className="dice" style={style}/>
        )
    }
}

export default DiceImg;