import React from 'react';
import Link from './Link';
import styled from 'styled-components';
import Page from './Page';

const HomeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
`;

type HomeProps = Readonly<{}>;

const Home: React.SFC<HomeProps> = () => (
    <Page title="Hello!">
        <HomeContent>
            <Link to="/videos">Videos</Link>
            <Link to="/docs">Docs</Link>
        </HomeContent>
    </Page>
);

export default Home;
