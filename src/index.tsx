import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');

if (root) {
    const app = createRoot(root);

    app.render(<App />);
}
