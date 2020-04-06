import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const Title = styled.h1`
    flex: 1;
`;

type DocsProps = Readonly<{}>;

const Docs: React.SFC<DocsProps> = () => (
    <Page>
        <Title>Docs list</Title>
    </Page>
);

export default Docs;
