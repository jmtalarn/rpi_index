import React from 'react';
import styled from 'styled-components';

import Link from './ExternalLink';
import Page from './Page';
import Icon from './Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTvRetro,
    faPopcorn,
    faPhotoVideo,
    faSatelliteDish,
    faCloudDownloadAlt,
} from '@fortawesome/pro-duotone-svg-icons';
// eslint-disable-next-line no-unused-vars

type ServicesProps = Readonly<{}>;

const ServicesContent = styled.div`
    height: 100%;

    margin: 0 auto;

    .link-text {
        margin-left: 1rem;
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
                    <Link focusKey="jellyfin" to="http://192.168.0.22:8096">
                        <FontAwesomeIcon color="mediumorchid" icon={faPopcorn} />
                        <span className="link-text">Jellyfin</span>
                    </Link>
                    <Link focusKey="plex" to="http://192.168.0.22:32400/web">
                        <FontAwesomeIcon color="orange" icon={faPhotoVideo} />
                        <span className="link-text">Plex</span>
                    </Link>
                    <Link focusKey="tvheadend" to="http://192.168.0.22:9981/">
                        <FontAwesomeIcon color="paleTurquoise" icon={faTvRetro} />
                        <span className="link-text">TVHeadend</span>
                    </Link>

                    <Link focusKey="torrent" to="http://192.168.0.22:8112/">
                        <FontAwesomeIcon color="steelBlue" icon={faCloudDownloadAlt} />
                        <span className="link-text">Delunge</span>
                    </Link>
                    <Link focusKey="iptv" to="http://192.168.0.22/livetv/">
                        <FontAwesomeIcon color="springGreen" icon={faSatelliteDish} />
                        <span className="link-text">IP TV files</span>
                    </Link>
                </FlexColumnContent>
            </ServicesContent>
        </Page>
    );
};

export default Services;
