import React, { FormEventHandler, useState } from 'react';

import { LoginForm } from './components/Form.tsx';

export const LogIn = () => {
    const [error] = useState<string | null>(null);

    const handleLogIn: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        // const email = event.currentTarget.email.value;
        // const password = event.currentTarget.password.value;
        // TODO - here you need to add a function that will moved user to global  scope
    };

    return <LoginForm logIn={handleLogIn} error={error} />;
};
