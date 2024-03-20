import React from 'react';
import { Link } from 'react-router-dom';

// TODO: replace any with proper type
export const UserList = ({ users }: any) => {
    return (
        <ul>
            {(users || []).map((user: any) => (
                <li key={user.id}>
                    <Link to={`${user.id}`}>{user.firstName}</Link>
                </li>
            ))}
        </ul>
    );
};
