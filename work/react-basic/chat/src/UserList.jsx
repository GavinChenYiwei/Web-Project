import React from 'react';
import User from './User';

const UserList = ({users}) => {
    return (
        <ul className="users">
            {users.map(user => <User user={Object.keys(user)[0]}/>)}
        </ul>
    );
};

export default UserList;