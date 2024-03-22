import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProfileResponseType } from '@Models';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import UserDetails from '../pages/UserDetails';
import UserProfile from '../pages/UserProfile';
import Users from '../pages/Users';
import { ProtectedRoute, SuspenseLayout } from './components';

export const AppRoutes = () => {
    const [user, setUser] = useState<ProfileResponseType | null>(null);

    return (
        <Routes>
            <Route element={<SuspenseLayout />}>
                <Route element={<ProtectedRoute isAllowed={!user} redirectedPath={'/'} />}>
                    <Route path="/login" element={<LogIn onLogIn={setUser} />} />
                </Route>

                <Route element={<ProtectedRoute isAllowed={!!user} redirectedPath={'/login'} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<Users />}>
                        <Route path="/users" element={<div>Select a user</div>} />
                        <Route path=":id" element={<UserProfile />}>
                            <Route path="details" element={<UserDetails />} />
                        </Route>
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
