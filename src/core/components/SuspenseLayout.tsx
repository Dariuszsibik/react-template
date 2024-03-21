import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '@Components';

export const SuspenseLayout = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
};
