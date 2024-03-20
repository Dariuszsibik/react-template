import React from 'react';

export const Home = () => {
    // TODO - display icons in img tag

    return (
        <div className="home-container">
            <h1 className="themed">React Webpack Typescript</h1>

            <div>
                <img className="item-icon" alt="icon" /> Typescript
                <img className="item-icon" alt="icon" /> React
                <img className="item-icon" alt="icon" /> Webpack
                <img className="item-icon" alt="icon" /> Chrome
            </div>
        </div>
    );
};
