import React, { useContext } from 'react';
import { stateContext } from '../state/state-context';
import Icon from './Icon';
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

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
type PageProps = { showLogo?: boolean; title: string; backButton?: boolean; children?: any };
const FocusablePage = styled(Focusable)``;
const Page: React.SFC<PageProps> = ({ title, children, backButton, showLogo }: PageProps) => {
    const [, setState] = useContext(stateContext);
    if (setState) {
        setState(() => {
            return kebabCase(title);
        });
    }

    return (
        <FocusablePage focusKey={kebabCase(title)}>
            <PageStyle>
                <Header>
                    {showLogo && <Icon />}
                    <Title>{title}</Title>
                    {backButton && (
                        <Link to="/" focusKey="back">
                            ⨉
                        </Link>
                    )}
                </Header>

                {children}
            </PageStyle>
        </FocusablePage>
    );
};

Page.defaultProps = { backButton: false, showLogo: true };
export default Page;
