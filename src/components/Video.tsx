import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Page from './Page';

type VideoProps = Readonly<{ filename: string | undefined; path: string | undefined }>;
const Wrapper = styled.div`
    position: relative;
    width: 90vw;
    height: 85vh;

    margin: 0 auto;
`;
const Video: React.SFC<VideoProps> = ({ filename, path }: VideoProps) => {
    const videoplayerRef = useRef<ReactPlayer>(null);
    // if (myVideo.paused) myVideo.play();
    // else myVideo.pause();

    // const onKeyDown = useCallback(
    //     event => {
    //         if (!(event instanceof KeyboardEvent)) return;
    //         // const videoplayer = videoplayerRef.current;
    //         console.log(event );

    //         // switch (event.key) {
    //         //     case 'ArrowRight':
    //         //         videoplayer?.seekTo(3, 'seconds');
    //         //         return;
    //         //     case 'ArrowLeft':
    //         //         videoplayer?.seekTo(3, 'seconds');
    //         //         return;
    //         // }
    //     },
    //     [videoplayerRef],
    // );
    // useEffect(() => {
    //     document.addEventListener('keydown', onKeyDown);
    //     return () => document.removeEventListener('keydown', onKeyDown);
    // }, [onKeyDown]);
    // console.log('Video component', path, filename);
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
                    url={`http://192.168.0.22/files/${path}/${filename}`}
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </Wrapper>
        </Page>
    );
};

export default Video;
