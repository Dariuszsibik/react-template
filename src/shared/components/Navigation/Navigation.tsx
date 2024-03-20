import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navigation-header">
            {/* TODO - display current logged in user */}
            <div>
                <div className="user-hello">Witaj: </div>
            </div>

            {/* TODO - menu should display when user is log in */}
            <div>
                <>
                    <NavLink
                        end
                        className={({ isActive }) => (isActive ? 'menu-item menu-item__active' : 'menu-item')}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'menu-item menu-item__active' : 'menu-item')}
                        to="/settings"
                    >
                        Settings
                    </NavLink>
                    <NavLink
                        end
                        className={({ isActive }) => (isActive ? 'menu-item menu-item__active' : 'menu-item')}
                        to="/users"
                    >
                        Users
                    </NavLink>
                </>
            </div>
        </nav>
    );
};
