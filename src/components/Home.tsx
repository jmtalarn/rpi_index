import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from './Link';
import Page from './Page';
import ErrorMessage from './ErrorMessage';
import { kebabCase } from '../utils/string-utils';
// eslint-disable-next-line no-unused-vars
import { FileType } from './FileType';

const HomeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: calc(100vh - 9rem);
    flex-wrap: wrap;
`;

type HomeProps = Readonly<{}>;

const Home: React.SFC<HomeProps> = () => {
    const [hasError, setErrors] = useState(false);
    const [folders, setFolders]: [FileType[], Function] = useState([]);
    useEffect(() => {
        fetch('http://192.168.0.22/json')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setFolders(res);
            })
            .catch(() => setErrors(true));
    }, []);
    return (
        <Page title="raspberry pi index">
            <HomeContent>
                {hasError && <ErrorMessage>Something went wrong</ErrorMessage>}
                {folders.length > 0 &&
                    folders.map(folder => (
                        <Link key={kebabCase(folder.name)} focusKey={kebabCase(folder.name)} to={`/${folder.name}`}>
                            {folder.name}
                        </Link>
                    ))}

                <Link focusKey={'services'} to={'/services'}>
                    Services{' '}
                    <span role="img" aria-label="Mr. Robot">
                        🤖
                    </span>
                </Link>
            </HomeContent>
        </Page>
    );
};

export default Home;
