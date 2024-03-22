import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { UserType } from '@Models';

export const UserDetails = () => {
    const user = useOutletContext() as UserType;

    return (
        <>
            <div>{user && user.id}</div>
            <div>{user && user.gender}</div>
            <div>{user && user.email}</div>
            <div>{user && user.height}</div>
            <div>{user && user.ip}</div>
            <img src={user && user.image} alt="user" />
        </>
    );
};
