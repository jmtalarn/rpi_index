import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { userContext } from './state/user-context';

import Container from './components/Container';
import Home from './components/Home';
import Page from './components/Page';

import { ThemeProvider } from 'styled-components';
import theme, { ThemeGlobalStyle } from './theme/Theme';

// eslint-disable-next-line no-unused-vars
import { UserType, AppState } from './utils/Types';

type AppProps = Readonly<{}>;

class App extends React.Component<AppProps, AppState> {
    listeners: any;
    constructor(props: AppProps) {
        super(props);
        this.state = {
            user: null,
        };
    }

    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <userContext.Provider value={this.state}>
                        <Container>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/videos">
                                    <Page title="Videos list" backButton />
                                </Route>
                                <Route path="/docs">
                                    <Page title="Docs list" backButton />
                                </Route>
                            </Switch>
                        </Container>
                    </userContext.Provider>
                    <ThemeGlobalStyle />
                </ThemeProvider>
            </Router>
        );
    }
}

export default App;
