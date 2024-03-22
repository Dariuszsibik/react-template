import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const UserProfile = () => {
    const user = {
        firstName: 'Dariusz',
    };

    return (
        <>
            <div>{user && user.firstName}</div>

            <div>firstName</div>

            <Link to="Details">Show details</Link>

            <Outlet context={user} />
        </>
    );
};
