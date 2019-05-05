import React from 'react';

const User = ({user}) => {
    return (
        <li>
            <div className="user">
                <span className="username">{user}</span>
            </div>
        </li>
    );
}

export default User;