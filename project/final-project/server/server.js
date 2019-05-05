const express = require('express');
const game=require('./game');
const app = express();
const PORT = 4000;
app.use(express.static("../build"));

app.get('/', (req,res)=>{
    res.sendFile("index.html");
});

app.get('/register/',(req,res)=>{
    res.json(game.players);
});
app.post('/register/',express.json(),(req,res)=>{
    const p1 = req.body.player1;
    const p2 = req.body.player2;
    if(p1 && p2){
        game.addPlayers(p1,p2)
    }
    res.json(game.players);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );