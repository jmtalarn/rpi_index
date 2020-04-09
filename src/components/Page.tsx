import React from 'react';
import { Focusable } from 'react-sunbeam';
import { kebabCase } from '../utils/string-utils';
import logo from '../Raspberry_Pi_Logo.svg';

import styled from 'styled-components';
import Link from './Link';

const PageStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const Title = styled.h1`
    flex: 1;
`;
const Image = styled.img`
    height: 3rem;
    margin-right: 1rem;
`;
const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
type PageProps = { showLogo?: boolean; title: string; backButton?: boolean; children?: any };
const FocusablePage = styled(Focusable)``;
const Page: React.SFC<PageProps> = ({ title, children, backButton, showLogo }: PageProps) => (
    <FocusablePage focusKey={kebabCase(title)}>
        <PageStyle>
            <Header>
                {showLogo && <Image src={logo} />}
                <Title>{title}</Title>
                {backButton && <Link to="/">⨉</Link>}
            </Header>

            {children}
        </PageStyle>
    </FocusablePage>
);
Page.defaultProps = { backButton: false, showLogo: true };
export default Page;
