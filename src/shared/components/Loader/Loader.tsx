import React from 'react';

import styled from 'styled-components';

const StyledLoader = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    text-align: center;
    color: #000;
`;

export const Loader = () => {
    return <StyledLoader>Loading...</StyledLoader>;
};
