import React from 'react';

import { ICONS } from './constants';

export const Home = () => {
    return (
        <div className="home-container">
            <h1 className="themed">React Webpack Typescript</h1>

            <div>
                <img className="item-icon" src={ICONS.typescript} alt="icon" /> Typescript
                <img className="item-icon" src={ICONS.react} alt="icon" /> React
                <img className="item-icon" src={ICONS.webpack} alt="icon" /> Webpack
                <img className="item-icon" src={ICONS.chrome} alt="icon" /> Chrome
            </div>
        </div>
    );
};
