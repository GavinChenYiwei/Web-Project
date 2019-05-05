const chatWeb = {
  chatPage: function(chat) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="chat.css" />
          <link rel="stylesheet" type="text/css" href="resources/css/style.css">
          <link href="https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css" rel="stylesheet">
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
            </div>
            <div class="outgoing">
              ${chatWeb.getOutGoingRefresh(chat)}
              ${chatWeb.getOutGoingPost(chat)}
              ${chatWeb.getOutGoingLogout(chat)}
            </div>
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      chat.messages.map( message => `
        <li>
          <div class="message">
            <div class="message-info">
              <time class="timestamp">${message.timestamp}</time>
            </div>
            <div class="meta-info">
              <div class="sender-info">
                <img class="avatar" alt="user-avatar" src="images/avatar-amit.jpg" />
                <span class="username">${message.sender}</span>
              </div>
              <p class="message-text">${message.text}</p>
            </div>
          </div>
        </li>
      `).join('') +
      `</ol>`;
  },
  getUserList: function(chat) {
    return `<ul class="users">` +
    chat.users.map( user => `
      <li>
				<div class="user">
					<i class="icon ion-ios-person"></i>
					<span class="username">${user}</span>
				</div>
			</li>
    `).join('') +
    `</ul>`;
  },
  getOutGoingRefresh: function(chat){
    return `
        <form action="/refresh" method="GET">
          <input type="hidden" name="username" value='${chat.currUser}'>
          <button class="btn-refresh" type="submit">Refresh</button>
        </form>
    `
  },
  getOutGoingPost: function(chat) {
    return `
        <form action="/chat" method="POST">
          <i class="icon ion-ios-happy"></i>
          <input type="hidden" name="username" value='${chat.currUser}'>
          <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
          <button type="submit">Send</button>
        </form>
    `
  },
  getOutGoingLogout: function(chat) {
    return `
      <form action="/logout" method="POST">
        <input type="hidden" name="username" value='${chat.currUser}'>
        <button type="submit">Logout</button>
      </form>
    `
  }
};
module.exports = chatWeb;
