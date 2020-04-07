// import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
    color: ${props => props.theme.textColor};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
`;

export default Grid;
