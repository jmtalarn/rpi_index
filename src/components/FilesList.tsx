import React, { useState, useEffect } from 'react';

import { kebabCase } from '../utils/string-utils';
import FileBox from './FileBox';
import Grid from './Grid';
import ErrorMessage from './ErrorMessage';

// eslint-disable-next-line no-unused-vars
import { FileType } from './FileType';

type FilesListProps = Readonly<{ path: string }>;

const FilesList: React.SFC<FilesListProps> = ({ path }: FilesListProps) => {
    const [hasError, setErrors] = useState(false);
    const [files, setFilesList]: [FileType[], Function] = useState([]);

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_IP_ADDRESS}/json/${path}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setFilesList(res);
            })
            .catch(() => setErrors(true));
    }, [path]);

    return (
        <>
            {hasError && <ErrorMessage>Something went wrong</ErrorMessage>}
            {files.length > 0 && (
                <Grid>
                    {files.map(file => (
                        <FileBox key={kebabCase(file.name)} focusKey={kebabCase(file.name)} path={path} file={file} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default FilesList;
