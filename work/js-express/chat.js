const users = [];

const messages = [];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser (user){
  if (users.indexOf(user) === -1){
    users.push(user);
  }
}

function removeUser (user) {
  const index = users.indexOf(user);
  users.splice(index,1);
}

let currUser="";

function setCurrUser(user){
  currUser = user;
  return currUser;
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  setCurrUser,
  removeUser,
  currUser
};

module.exports = chat;

