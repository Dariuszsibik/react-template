import React from 'react';
import { Outlet } from 'react-router-dom';

import { UserList } from './components/UserList';
import { useUserList } from './hooks';
import './users.css';

export const Users = () => {
    const { users, gender, onGenderChange } = useUserList();

    return (
        <>
            <select defaultValue={gender} onChange={onGenderChange}>
                <option>male</option>
                <option>female</option>
            </select>

            <div className="userlist-container">
                <UserList users={users || []} />

                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Users;
