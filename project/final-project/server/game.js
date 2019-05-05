let players = [];

function addPlayers(p1_name, p2_name){
    if(p1_name && p2_name){
        players.push({player1: p1_name, player2:p2_name})
    }
}

const game = {
    players,
    addPlayers
};

module.exports = game;