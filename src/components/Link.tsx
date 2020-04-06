// import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: ${props => props.theme.textColor};
    font-size: 3rem;
    text-decoration: none;

    text-align: center;
`;
export default StyledLink;
