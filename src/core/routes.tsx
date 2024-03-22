import React, { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProfileResponseType } from '@Models';

import { ProtectedRoute, SuspenseLayout } from './components';

const Home = lazy(() => import(/* webpackChunkName: "pages/home"*/ '../pages/Home'));
const LogIn = lazy(() => import(/* webpackChunkName: "pages/LogIn"*/ '../pages/LogIn'));
const NotFound = lazy(() => import(/* webpackChunkName: "pages/NotFound"*/ '../pages/NotFound'));
const Settings = lazy(() => import(/* webpackChunkName: "pages/Settings"*/ '../pages/Settings'));
const UserDetails = lazy(() => import(/* webpackChunkName: "pages/UserDetails"*/ '../pages/UserDetails'));
const UserProfile = lazy(() => import(/* webpackChunkName: "pages/UserProfile"*/ '../pages/UserProfile'));
const Users = lazy(() => import(/* webpackChunkName: "pages/Users"*/ '../pages/Users'));

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
