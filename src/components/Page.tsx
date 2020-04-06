import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const Title = styled.h1`
    flex: 1;
`;
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`;
type PageProps = { title: string; backButton?: boolean; children?: any };

const Page: React.SFC<PageProps> = ({ title, children, backButton }: PageProps) => (
    <PageStyle>
        <Header>
            <Title>{title}</Title>
            {backButton && <Link to="/">⨉</Link>}
        </Header>

        {children}
    </PageStyle>
);
Page.defaultProps = { backButton: false };
export default Page;
