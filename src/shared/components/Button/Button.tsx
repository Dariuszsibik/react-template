import React from 'react';

type ButtonProps = {
    type: 'submit' | 'reset' | 'button';
    text: string;
    disabled: boolean;
};

export const Button = ({ type, text, disabled }: ButtonProps) => {
    return (
        <button type={type} disabled={disabled}>
            {text}
        </button>
    );
};
