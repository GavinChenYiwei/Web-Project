let messagesOL = document.querySelector('.messages');
let messages = messagesOL.querySelectorAll('li');
let usersUL = document.querySelector('.users');
let users = usersUL.querySelectorAll('li');
let selectedUsers =[];


// Add username to the message class
( function usrToClass() {
  const mesLists = document.querySelector(".messages").querySelectorAll('li');
  [].forEach.call(mesLists, function(message) {
    if (!message.classList.contains('indicator')) {
      const username = message.querySelector('.username').innerHTML;
      message.classList.add("msg__" + username);
    }
  });
})();

// Initial
( function init(){
  let usrlist = new Array();
  usrlist = window.name.split(",");
  [].forEach.call(users,function (user) {
    const usr = user.querySelector('span');
    const username = usr.innerHTML;
    if (usrlist.indexOf(username) !== -1) {
      usr.classList.add('user-select');
    }
  });
  updateSelectedMessage();
})();

( function messageCheck() {
  const sendButton = document.querySelector(".send button");
  const toSend = document.querySelector(".to-send");
  if(toSend && sendButton) {
    sendButton.disabled = !toSend.value;
    toSend.addEventListener('input', (e) => {
      if(e.target.value) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    });
  };
})();

//Login button check (username input)
( function loginCheck() {
  const loginButton = document.querySelector(".login button");
  const usrName = document.querySelector(".login input");
  if(usrName && loginButton) {
    loginButton.disabled = !usrName.value;
    usrName.addEventListener('input', (e) => {
      if(e.target.value) {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    });
  };
})();

// Add unselect button in the users list
( function unselectBTN() {
  const unselectBtn = document.createElement('button');
  unselectBtn.innerText = 'Unselect All';
  unselectBtn.setAttribute('id','btn-unselect');
  if (users.length > 1)
    usersUL.appendChild(unselectBtn);
})();

// Logout button to clear the window.name
const logoutButton = document.querySelector(".logout button");
logoutButton.addEventListener('click',() => {
  window.name = "";
});

//count selected user
function numOfSelectedUsr() {
  let count = 0;
  [].forEach.call(users,function (user) {
    const selectStatus = user.querySelector('span');
    if (selectStatus.classList.contains('user-select')) {
      count++;
    }
  });
  return count;
};

// Add selected users to the array
function addToArrUsr(){
  selectedUsers.length = 0;
  [].forEach.call(users,function (user) {
    const selectStatus = user.querySelector('span');
    if (selectStatus.classList.contains('user-select')) {
      selectedUsers.push(selectStatus.innerHTML);
    }
  });
  return selectedUsers;
}

// Update message List
function updateSelectedMessage(){
  hideAllMessage();
  users = usersUL.querySelectorAll('li');
  messages = messagesOL.querySelectorAll('li');
  [].forEach.call(users,function (user) {
    const usr = user.querySelector('span');
    const username = usr.innerText;
    if (usr.classList.contains('user-select')) {
      [].forEach.call(messages, function(message) {
        console.log(username);
        console.log("msg__"+username);
        console.log(message.classList);
        console.log(message.classList[1]);
        console.log(message.classList.contains("msgInvisible"));
        if (message.classList.contains("msg__"+ username) && message.classList.contains('msgInvisible')) {
          message.classList.remove('msgInvisible');
        }
      })
    } else {
      [].forEach.call(messages, function(message) {
        if (message.classList.contains("msg__"+username) && !message.classList.contains('msgInvisible')) {
          message.classList.remove('msgInvisible');
          message.classList.add('msgInvisible');
        }
      })
    };
  });
  if (numOfSelectedUsr() === 0)
    showAllMessage();
  addIndicator();
};

// Show all the chat messages
function showAllMessage() {
  [].forEach.call(messages, function(message) {
    if (message.classList.contains('msgInvisible')) {
      message.classList.remove('msgInvisible');
    }
  })
};

// Hide all the chat messages
function hideAllMessage() {
  [].forEach.call(messages, function(message) {
    if (!message.classList.contains('msgInvisible')) {
      message.classList.add('msgInvisible');
    }
  })
};

// Change color & update message list (MAIN FUNCTION)
usersUL.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('user-select');
  }
  updateSelectedMessage();
  selectedUsers = addToArrUsr();
  window.name = selectedUsers;
});


// unselect all button function
const unselectAll = document.getElementById('btn-unselect');
unselectAll.addEventListener('click', (e) => {
  [].forEach.call(users,function (user) {
    const selectStatus = user.querySelector('span');
    if (selectStatus.classList.contains('user-select')) {
      selectStatus.classList.toggle("user-select");
    }
  });
});

/*---------- INDICATOR ------------- */
// Create an indicator
function indicator(){
  const li = document.createElement('li');
  li.textContent = '...';
  li.classList.add('indicator');
  return li;
}

function addIndicator(){
  removeAllIndicator();
  messages = messagesOL.querySelectorAll('li');
  let append = false;
  [].forEach.call(messages, function(message) {
    if (message.classList.contains('msgInvisible')) {
      append = true;
    }else if (append === true) {
      append = false;
      messagesOL.insertBefore(indicator(),message);
    }
  });
  if (append === true){
    messagesOL.appendChild(indicator());
    append = false;
  };
};

function removeAllIndicator() {
  messages = messagesOL.querySelectorAll('li');
  [].forEach.call(messages, function(message) {
    if (message.classList.contains('indicator')) {
      message.parentNode.removeChild(message);
    }
  });
};

/* ---------------------------------------------------- */










