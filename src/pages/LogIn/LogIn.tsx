import React, { Dispatch, FormEventHandler, SetStateAction, useState } from 'react';

import { ProfileResponseType } from '@Models';

import { LoginForm } from './components/Form.tsx';
import { getProfile } from './service';

type LogInProps = {
    onLogIn: Dispatch<SetStateAction<ProfileResponseType | null>>;
};

export const LogIn = ({ onLogIn }: LogInProps) => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogIn: FormEventHandler<HTMLFormElement> = (event) => {
        setLoading(true);
        event.preventDefault();

        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;

        getProfile(email, password)
            .then((data) => {
                onLogIn(data);
            })
            .catch((e) => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return <LoginForm logIn={handleLogIn} error={error} disabled={loading} />;
};
