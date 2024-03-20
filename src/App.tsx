import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navigation } from '@Components';
import { AppRoutes } from '@Core';

import './App.css';

const App = () => {
    return (
        <Router>
            <Navigation />

            <AppRoutes />
        </Router>
    );
};

export default App;
