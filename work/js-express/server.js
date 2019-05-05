const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');
const loginweb = require('./login-web');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  if (req.query.username == null){
    res.redirect('/login');
  } else {
    res.send(chatWeb.chatPage(chat));
  }
});

app.get('/refresh', (req, res) => {
  const currUser = req.query.username;
  chat.currUser = currUser;
  res.redirect('/?username=' + currUser);
})

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const currUser = req.body.username;
  chat.currUser = currUser;
  const sender = currUser; // Hardcode until we add a login
  const  text  = req.body.text;
  chat.addMessage({ sender, text, timestamp: new Date() });
  res.redirect('/?username='+ currUser);
});

app.get('/login', (req,res) => {
  res.send(loginweb.loginPage());
})

app.post('/login', express.urlencoded({ extended: false }),(req,res) => {
  const username = req.body.username;
  chat.addUser(username);
  chat.currUser = chat.setCurrUser(username);
  res.redirect('/?username=' +username);
})

app.post('/logout', express.urlencoded({ extended: false }), (req,res) => {
  const username = req.body.username;
  chat.removeUser(username);
  res.redirect('/');
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
