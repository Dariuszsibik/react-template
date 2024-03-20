import React from 'react';

type ButtonProps = {
    type: 'submit' | 'reset' | 'button';
    text: string;
};

export const Button = ({ type, text }: ButtonProps) => {
    return <button type={type}>{text}</button>;
};
