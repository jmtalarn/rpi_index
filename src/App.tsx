import React, { useState, useCallback, useEffect } from 'react';
import { SunbeamProvider, FocusManager, useSunbeam } from 'react-sunbeam';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { stateContext } from './state/state-context';

import Container from './components/Container';
import Home from './components/Home';
import FilesList from './components/FilesList';
import Page from './components/Page';
import Doc from './components/Doc';

import { ThemeProvider } from 'styled-components';
import theme, { ThemeGlobalStyle } from './theme/Theme';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// eslint-disable-next-line no-unused-vars
// import { UserType, AppState } from './utils/Types';

type AppProps = Readonly<{}>;

const App: React.SFC<AppProps> = () => {
    const [state, setState] = useState(null);
    const { setFocus, moveFocusLeft, moveFocusRight, moveFocusUp, moveFocusDown } = useSunbeam();
    const onKeyDown = useCallback(
        event => {
            if (!(event instanceof KeyboardEvent)) {
                return;
            }

            switch (event.key) {
                case 'ArrowRight':
                    moveFocusRight();
                    return;
                case 'ArrowLeft':
                    moveFocusLeft();
                    return;
                case 'ArrowUp':
                    moveFocusUp();
                    return;
                case 'ArrowDown':
                    moveFocusDown();
                    return;
                case 'Enter':
            }
        },
        [moveFocusLeft, moveFocusRight, moveFocusUp, moveFocusDown],
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <stateContext.Provider value={state}>
                    <Container>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/videos">
                                <Page title="Videos list" backButton>
                                    <FilesList path="videos" />
                                </Page>
                            </Route>
                            <Route path="/docs">
                                <Page title="Docs list" backButton>
                                    <FilesList path="docs" />
                                </Page>
                            </Route>
                            <Route path="/doc/:path/:filename">
                                <Doc />
                            </Route>
                        </Switch>
                    </Container>
                </stateContext.Provider>
                <ThemeGlobalStyle />
            </ThemeProvider>
        </Router>
    );
};

const focusManager = new FocusManager({
    initialFocusPath: ['raspberry-pi-index', 'videos'],
});
const SunbeamProvidedApp = () => (
    <SunbeamProvider focusManager={focusManager}>
        <App />
    </SunbeamProvider>
);

export default SunbeamProvidedApp;
