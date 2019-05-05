"use strict";

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

// Send button check (message input)
( function sendCheck() {
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
    }
})();

// Remove refresh button
( function removeBtn() {
  const refreshButton = document.querySelector(".refresh button");
  refreshButton.parentNode.removeChild(refreshButton);
})();

(function() {
  const outgoing = document.querySelector(".outgoing");

  // Check whether the error message is shown or not
  function hasErrorMsg(){
    if(outgoing.getElementsByTagName('p').length > 0)
      return true;
    else
      return false;
  }

  // Create connection error message
  function addErrorMsg() {
    const errMsg = document.createElement('p');
    errMsg.classList.add('errMsg');
    errMsg.innerText = "Connection lost. Please check the internet";
    outgoing.appendChild(errMsg);
  }

  // Delete error message 
  function deleteErrorMsg() {
    const errMsg = document.querySelector(".errMsg");
    errMsg.parentNode.removeChild(errMsg);
  }

  const refresh = () => {

    // Update messages list
    fetch('/messages/')
    .then( response => {
      if( response.ok ) {
        if(hasErrorMsg())
          deleteErrorMsg();
        return response.json();
      }
      return response.json().then(err => Promise.reject(err))
    })
    .then( message => {
      const messages = message.map( message =>
         `<li>
          <div class="message">
            <div class="meta-info">
              <div class="sender-info">
                <span class="username">${message.sender}</span>
              </div>
              <div class="message-info">
                <span class="timestamp">${message.timestamp}</span>
              </div>
            </div>
            <p class="message-text">${message.text}</p>
          </div>
        </li>
       `).join('');
      document.querySelector('.messages').innerHTML = messages;
    })
    .catch(err => {
        if (!hasErrorMsg())
           addErrorMsg();
    });
    
    // Update Users list
    fetch('/users/')
    .then( response => {
      if( response.ok ) {
        if(hasErrorMsg())
          deleteErrorMsg();
        return response.json();
      }
      return response.json().then(err => Promise.reject(err));
    })
    .then( user => {
      const users = user.map( user =>
         `<li>
            <div class="user">
              <span class="username">${user}</span>
            </div>
          </li>
       `).join('');
      document.querySelector('.users').innerHTML = users;
    })
  }

  // get url request
  function GetRequest() {
    const url = location.search; 
    if (url.indexOf("?") != -1) {    
       const str = url.substr(1); 
       const strs = str.split("=");   
       return strs[1]; 
    }
 }

  const sendButton = document.querySelector(".send button");
  
  // send without reloading the page
  sendButton.addEventListener('click', (event)=> {
    event.preventDefault();
    const text = document.querySelector(".to-send").value;
    const timestamp = new Date();
    const sender = GetRequest();
    fetch('/messages/', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify( { sender, text, timestamp } )
    })
    .then(response => {
      if(response.ok) {
        refresh();
      }
    })
  });

  setInterval(refresh, 5000);

})();