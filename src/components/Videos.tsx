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

type VideosProps = Readonly<{}>;

const Videos: React.SFC<VideosProps> = () => (
    <Page>
        <Title>Videos list</Title>
    </Page>
);

export default Videos;
