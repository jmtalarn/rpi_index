import * as React from 'react';

import styled from 'styled-components';
import Page from '../components/Page';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/pro-duotone-svg-icons';
import Link from '../components/Link';
// styles

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: calc(100vh - 9rem);
    flex-wrap: wrap;
    color: ${(props) => props.theme.textColor};
    font-size: 3rem;
    .icon {
        margin: 0 1rem;
    }
`;

// markup
const NotFoundPage = () => {
    return (
        <Layout>
            <Page title="Page not found">
                <Content>
                    <p>
                        Sorry <FontAwesomeIcon color="mistyRose" icon={faSadTear} /> we couldn’t find what you were
                        looking for.
                    </p>
                    {process.env.NODE_ENV === 'development' ? (
                        <p>
                            Try creating a page in <code>src/pages/</code>.
                        </p>
                    ) : null}
                    <Link to="/">Go home</Link>
                </Content>
            </Page>
        </Layout>
    );
};

export default NotFoundPage;
