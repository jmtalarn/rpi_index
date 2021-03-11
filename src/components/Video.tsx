import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Page from './Page';
import { useSiteMetadata } from '../utils/use-site-metadata';


const Wrapper = styled.div`
    position: relative;
    width: 90vw;
    height: 85vh;

    margin: 0 auto;
`;
const Video = ({ filename, path }) => {
    const videoplayerRef = useRef<ReactPlayer>(null);
	const { ip: ipAddress} = useSiteMetadata();

    useEffect(() => {
        const videoplayer = videoplayerRef.current;
        (videoplayer?.getInternalPlayer() as HTMLVideoElement).focus();
        return () => {};
    }, [videoplayerRef]);
    return (
        <Page title={filename || 'NO_NAME'} backButton>
            <Wrapper>
                <ReactPlayer
                    ref={videoplayerRef}
                    autoFocus={true}
                    className="react-player"
                    url={`http://${ipAddress}/files/${path}/${filename}`}
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </Wrapper>
        </Page>
    );
};

export default Video;
