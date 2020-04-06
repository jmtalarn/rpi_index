// import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: ${props => props.theme.textColor};
    font-size: 3rem;
    text-decoration: none;

    text-align: center;
    opacity: 0.7;
    border-bottom: 1px solid transparent;
    transition: all 200ms ease-in;

    &:focus,
    &:active,
    &:hover {
        opacity: 1;

        border-bottom: 1px solid ${props => props.theme.textColor};
    }
`;
export default StyledLink;
