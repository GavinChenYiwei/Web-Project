const express = require('express');
const app = express();
const PORT = 4000;

const users = [{Emma: "Emma"},{Gavin: "Gavin"}];
const messages = [
    {sender: "Emma", timestamp:new Date().toString(), text:"Hello"},
    {sender: "Gavin", timestamp:new Date().toString(), text:"Bye"}
];

app.get('/msg',(req,res)=>{
    res.json(messages);
});

app.post('/msg',express.json(),(req,res)=>{
    const msg = req.body.message;
    messages.push(msg);
    res.json(messages);
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );