import React from 'react';

type Label = {
    htmlFor: string;
    text: string;
};

export const Label = ({ htmlFor, text }: Label) => {
    return <label htmlFor={htmlFor}>{text}</label>;
};
