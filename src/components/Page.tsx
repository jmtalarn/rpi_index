import React from 'react';
import { Focusable } from 'react-sunbeam';
import { kebabCase } from '../utils/string-utils';

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
type PageProps = { image?: string; title: string; backButton?: boolean; children?: any };

const Page: React.SFC<PageProps> = ({ title, children, backButton, image }: PageProps) => (
    <Focusable style={{ height: '100%' }} focusKey={kebabCase(title)}>
        <PageStyle>
            <Header>
                {image && <Image src={image} />}
                <Title>{title}</Title>
                {backButton && <Link to="/">⨉</Link>}
            </Header>

            {children}
        </PageStyle>
    </Focusable>
);
Page.defaultProps = { backButton: false };
export default Page;
