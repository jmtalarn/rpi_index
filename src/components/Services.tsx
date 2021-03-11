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
    faScannerImage,
} from '@fortawesome/pro-duotone-svg-icons';

import { useSiteMetadata } from '../utils/use-site-metadata';

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
    const { ip: ipAddress } = useSiteMetadata();

    return (
        <Page title="Other services running" backButton>
            <ServicesContent>
                <FlexColumnContent>
                    <Link focusKey="scan" to={`http://${ipAddress}:10002`}>
                        <FontAwesomeIcon color="gold" icon={faScannerImage} />
                        <span className="link-text">Scanner</span>
                    </Link>
                    <Link focusKey="plex" to={`http://${ipAddress}:32400/web`}>
                        <FontAwesomeIcon color="orange" icon={faPopcorn} />
                        <span className="link-text">Plex</span>
                    </Link>
                    <Link focusKey="tvheadend" to={`http://${ipAddress}:9981/`}>
                        <FontAwesomeIcon color="paleTurquoise" icon={faTvRetro} />
                        <span className="link-text">TVHeadend</span>
                    </Link>
                    <Link focusKey="torrent" to={`http://${ipAddress}:8112/`}>
                        <FontAwesomeIcon color="steelBlue" icon={faCloudDownloadAlt} />
                        <span className="link-text">Delunge</span>
                    </Link>
                    <Link focusKey="iptv" to={`http://${ipAddress}/livetv/`}>
                        <FontAwesomeIcon color="springGreen" icon={faSatelliteDish} />
                        <span className="link-text">IP TV files</span>
                    </Link>
                </FlexColumnContent>
            </ServicesContent>
        </Page>
    );
};

export default Services;
