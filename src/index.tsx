import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const App = lazy(() => import(/* webpackChunkName: "app-context" */ './App'));

if (root) {
    const app = createRoot(root);

    app.render(
        <Suspense fallback={'..loading'}>
            <App />
        </Suspense>
    );
}
