import React, { HTMLInputTypeAttribute } from 'react';

type InputProps = {
    id: string;
    name: string;
    type: HTMLInputTypeAttribute;
};

export const Input = ({ id, name, type }: InputProps) => {
    return <input id={id} name={name} type={type} />;
};
