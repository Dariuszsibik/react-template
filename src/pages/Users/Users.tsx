import React from 'react';
import { Outlet } from 'react-router-dom';

import { UserList } from './components/UserList';
import './users.css';

export const Users = () => {
    return (
        <>
            <select defaultValue={'male'}>
                <option>male</option>
                <option>female</option>
            </select>

            <div className="userlist-container">
                <UserList users={[]} />

                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Users;
