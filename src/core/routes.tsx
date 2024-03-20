import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LogIn />} />

            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />}>
                <Route path="/users" element={<div>Select a user</div>} />
                <Route path=":id" element={<Users />}>
                    <Route path="details" element={<UserDetails />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
