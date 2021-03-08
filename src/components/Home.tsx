import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from './Link';
import Page from './Page';
import Icon from './Icon';
import ErrorMessage from './ErrorMessage';
import { kebabCase } from '../utils/string-utils';
// eslint-disable-next-line no-unused-vars
import { FileType } from './FileType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMindShare, faFileAlt, faFilm } from '@fortawesome/pro-duotone-svg-icons';

const HomeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: calc(100vh - 9rem);
    flex-wrap: wrap;

    .icon {
        margin: 0 1rem;
    }
`;

type HomeProps = Readonly<{}>;

const Home: React.SFC<HomeProps> = () => {
    const [hasError, setErrors] = useState(false);
    const [folders, setFolders]: [FileType[], Function] = useState([]);
    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_IP_ADDRESS}/json`)
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
                            {folder.name}{' '}
                            <FontAwesomeIcon
                                color="CornflowerBlue"
                                icon={folder.name === 'docs' ? faFileAlt : faFilm}
                            />
                        </Link>
                    ))}

                <Link focusKey={'services'} to={'/services'}>
                    <FontAwesomeIcon color="hotpink" icon={faMindShare} />
                    Services
                </Link>
            </HomeContent>
        </Page>
    );
};

export default Home;
