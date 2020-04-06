// import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    background-color: ${props => props.theme.background.color};
    background: ${props => props.theme.background.gradient};
    height: 100vh;
`;

export default Container;
