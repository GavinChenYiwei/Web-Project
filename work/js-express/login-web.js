const loginWeb = {
    loginPage: function() {
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="login.css" />
            </head>
            <body>
                <div class="login-page">
                    <div class="login-page-title">
                        <h1>Welcome To Chat</h1>
                    </div>
                    <div class="login-page-info">
                        <div class="label-info">
                            <label class="label-username" for="username">Username : </label>
                        </div>
                        <form action="/login" method="POST">
                            <input required type="text" name="username" class="username-info" value="" placeholder="Enter username" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </body>
        </html>
        `;
    }
};
module.exports = loginWeb;