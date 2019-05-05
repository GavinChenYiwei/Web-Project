const express = require('express');
const app = express();
const PORT = 4000;

const users = {Emma: "Emma",Dan:"Dan"};
const messages = [
    {sender: "Emma", timestamp:new Date().toString(), text:"Hello"},
    {sender: "Gavin", timestamp:new Date().toString(), text:"Bye"}
];

app.get('/users/',(req,res)=> {
    res.json(users);
});

app.post('/users/',express.json(),(req,res)=>{
    const user = req.body.user;
    users[Object.keys(user)]=Object.keys(user)[0];
    res.json(user);
})

app.post('/logout/',express.json(),(req,res)=>{
    const user = req.body.user;
    delete users[user];
    res.json(users);
})

app.get('/messages/',(req,res)=>{
    res.json(messages);
});

app.post('/messages/',express.json(),(req,res)=>{
    const msg = req.body.message;
    messages.push(msg);
    res.json(messages);
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );