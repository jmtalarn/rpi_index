import React from 'react';

import { useLocation } from '@reach/router';
import queryString from 'query-string';
import { isVideoFile, isPdfFile } from '../utils/file-utils';

import Doc from './Doc';
import Video from './Video';

type ViewerProps = Readonly<{}>;

const ProcessDocParams = () => {
    const location = useLocation();

    let { path, filename } = queryString.parse(location.search);

    let viewer = null;

    if (isPdfFile(filename)) {
        viewer = <Doc path={path} filename={filename} />;
    } else if (isVideoFile(filename)) {
        viewer = <Video path={path} filename={filename} />;
    }

    return viewer;
};
export default ProcessDocParams;
