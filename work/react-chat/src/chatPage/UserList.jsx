import React from 'react';
import User from './User';

const UserList = ({users}) => {
    return (
        <ul className="users">
            {Object.keys(users).map(user => <User user={user}/>)}
        </ul>
    );
};
export default UserList;