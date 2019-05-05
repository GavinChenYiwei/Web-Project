const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');

app.use(express.static('./public'));

app.get('/users/', (req,res) => {
  res.json(Object.keys(chat.users));
});

app.get('/messages/',(req,res) => {
  res.json(Object(chat.messages));
});

app.post('/messages/', express.json(), (req,res) => {
  const {sender, text, timestamp} = req.body;
  chat.addMessage({ sender, text, timestamp});
  res.sendStatus(200);
})

app.get('/', (req, res) => {
  const { username } = req.query;
  if ( username && chat.users[username] ) {
    res.send( chatWeb.chatPage(chat, username) );
  } else {
    res.redirect('/login');
  }
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const { text, username } = req.body;
  if ( username ) {
    chat.addMessage({ sender: username, text, timestamp: new Date() });
    res.redirect(`/?username=${username}`);
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  res.send( chatWeb.loginPage() );
});

app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  const { username } = req.body;
  if ( username ) {
    chat.addUser({ username });
    res.redirect(`/?username=${username}`);
  } else {
    res.redirect('/login');
  }
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
  const { username } = req.body;
  if ( username ) {
    chat.removeUser({ username });
  }
  res.redirect('/login');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
