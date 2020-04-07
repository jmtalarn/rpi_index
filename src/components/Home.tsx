import React from 'react';
import { Focusable } from 'react-sunbeam';
import styled from 'styled-components';
import Link from './Link';
import Page from './Page';

const HomeContent = styled(Focusable)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
`;

type HomeProps = Readonly<{}>;

const Home: React.SFC<HomeProps> = () => {
    return (
        <Page title="Hello!">
            <HomeContent focusKey={'home'}>
                <Link focusKey={'videos'} to="/videos">
                    Videos
                </Link>
                <Link focusKey={'docs'} to="/docs">
                    Docs
                </Link>
            </HomeContent>
        </Page>
    );
};

export default Home;
