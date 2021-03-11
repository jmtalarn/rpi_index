import React, { useState, useCallback, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import theme, { ThemeGlobalStyle } from './theme';
import Container from './Container';
import Page from './Page';

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Container>{children}</Container>

            <ThemeGlobalStyle />
        </ThemeProvider>
    );
}
