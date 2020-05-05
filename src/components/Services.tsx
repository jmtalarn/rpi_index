import React from 'react';
import styled from 'styled-components';

import Link from './ExternalLink';
import Page from './Page';
import Icon from './Icon';
// eslint-disable-next-line no-unused-vars

type ServicesProps = Readonly<{}>;

const ServicesContent = styled.div`
    height: 100%;

    margin: 0 auto;

    .link-text {
        display: flex;
        align-items: center;
        font-size: 2rem;
    }
`;
const FlexColumnContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: calc(100vh - 9rem);
`;
const Services: React.SFC<ServicesProps> = () => {
    return (
        <Page title="Other services running" backButton>
            <ServicesContent>
                <FlexColumnContent>
                    <Link focusKey="kodi" to="http://192.168.0.22:8096">
                        <span className="link-text">
                            <Icon type="popcorn" />
                            Jellyfin
                        </span>
                    </Link>
                    <Link focusKey="tvheadend" to="http://192.168.0.22:9981/">
                        <span className="link-text">
                            <Icon type="television" />
                            TVHeadend
                        </span>
                    </Link>

                    <Link focusKey="torrent" to="http://192.168.0.22:8112/">
                        <span className="link-text">
                            <Icon type="download" />
                            Delunge
                        </span>
                    </Link>
                    <Link focusKey="iptv" to="http://192.168.0.22/livetv/">
                        <span className="link-text">
                            <Icon type="radioantenna" />
                            IP TV files
                        </span>
                    </Link>
                </FlexColumnContent>
            </ServicesContent>
        </Page>
    );
};

export default Services;
