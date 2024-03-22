import React from 'react';
import { Link } from 'react-router-dom';

import { UserType } from '@Models';

type UserListProps = {
    users: UserType[];
};

export const UserList = ({ users }: UserListProps) => {
    return (
        <ul>
            {(users || []).map((user: UserType) => (
                <li key={user.id}>
                    <Link to={`${user.id}`}>{user.firstName}</Link>
                </li>
            ))}
        </ul>
    );
};
