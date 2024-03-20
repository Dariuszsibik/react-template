import React, { FormEventHandler } from 'react';

import { Button, Input, Label } from '@Components';

type LoginFormProps = {
    logIn: FormEventHandler<HTMLFormElement>;
    error: string | null;
};

export const LoginForm = ({ logIn, error }: LoginFormProps) => {
    return (
        <form onSubmit={logIn}>
            <Label htmlFor="email" text="Login" />
            <Input id="email" name="email" type="text" />

            <Label htmlFor="password" text="Password" />
            <Input id="password" name="password" type="password" />

            <Button type="submit" text="Submit" />
            <span>{error}</span>
        </form>
    );
};
