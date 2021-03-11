import React, { useRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import styled from 'styled-components';

const StyledLink = styled(GatsbyLink)`
    color: ${(props) => props.theme.textColor};
    font-size: 3rem;
    text-decoration: none;

    text-align: center;
    opacity: 0.7;
    border-bottom: 1px solid transparent;
    transition: all 200ms ease-in;

    display: flex;
    align-items: center;

    &.focused,
    &:focus,
    &:active,
    &:hover {
        opacity: 1;

        border-bottom: 1px solid ${(props) => props.theme.textColor};
    }
`;

const Link = (props) => {
    // eslint-disable-next-line no-unused-vars
    const elementRef = useRef(null);

    const { children, focusKey, to, ...restProps } = props;

    return (
        <StyledLink ref={elementRef} to={to} {...restProps}>
            {children}
        </StyledLink>
    );
};
export default Link;
