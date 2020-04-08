import React from 'react';

import { useParams } from 'react-router-dom';
import { isVideoFile, isPdfFile } from '../utils/file-utils';

import Doc from './Doc';
import Video from './Video';

type ViewerProps = Readonly<{}>;

const ProcessDocParams = () => {
    let { path, filename } = useParams();

    let viewer = null;

    if (isPdfFile(filename)) {
        viewer = <Doc path={path} filename={filename} />;
    } else if (isVideoFile(filename)) {
        viewer = <Video path={path} filename={filename} />;
    }

    return viewer;
};
export default ProcessDocParams;
