import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useUserProfile } from './hooks';

export const UserProfile = () => {
    const { user } = useUserProfile();

    return (
        <>
            <div>{user && user.firstName}</div>

            <Link to="Details">Show details</Link>

            <Outlet context={user} />
        </>
    );
};
