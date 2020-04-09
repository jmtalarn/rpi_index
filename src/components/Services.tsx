import React from 'react';
import styled from 'styled-components';
import { Focusable } from 'react-sunbeam';
import Link from './Link';
import Page from './Page';

// eslint-disable-next-line no-unused-vars

type ServicesProps = Readonly<{}>;

const ServicesContent = styled(Focusable)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: calc(100vh - 9rem);
    width: 40%;
    margin: 0 auto;
`;

const Services: React.SFC<ServicesProps> = () => {
    return (
        <Page title="Other services running" backButton>
            <ServicesContent>
                <Link focusKey="kodi" to="http://192.168.0.22:8080">
                    <span role="img" aria-label=" Kodi">
                        🍿
                    </span>
                    Kodi
                </Link>
                <Link focusKey="tvheadend" to="http://192.168.0.22:9981/">
                    <span role="img" aria-label=" TVHeadend">
                        📺
                    </span>
                    TVHeadend
                </Link>
                <Link focusKey="torrent" to="http://192.168.0.22:8112/">
                    <span role="img" aria-label=" Delunge torrent client">
                        🏴‍☠️
                    </span>
                    Delunge torrent client
                </Link>
                <Link focusKey="iptv" to="http://192.168.0.22/livetv/">
                    <span role="img" aria-label=" IP TV files">
                        📡
                    </span>
                    IP TV files
                </Link>
            </ServicesContent>
        </Page>
    );
};

export default Services;
