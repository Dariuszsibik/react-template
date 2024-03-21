import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
    isAllowed: boolean;
    redirectedPath: string;
};

export const ProtectedRoute = ({ isAllowed, redirectedPath }: ProtectedRouteProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectedPath} />;
    }

    return <Outlet />;
};
