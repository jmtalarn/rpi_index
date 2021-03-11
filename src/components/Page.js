import React, { useContext } from 'react';
import { stateContext } from '../state/state-context';
import Icon from './Icon';

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
    font-weight: 100;
    color: ${(props) => props.theme.textColor};
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

const Page = ({ title, children, backButton, showLogo }) => {
    const [, setState] = useContext(stateContext);
    if (setState) {
        setState(() => {
            return kebabCase(title);
        });
    }

    return (
        <PageStyle>
            <Header>
                {showLogo && <Icon />}
                <Title>{title}</Title>
                {backButton && (
                    <Link to="/" focusKey="back">
                        ×
                    </Link>
                )}
            </Header>

            {children}
        </PageStyle>
    );
};

Page.defaultProps = { backButton: false, showLogo: true };
export default Page;
