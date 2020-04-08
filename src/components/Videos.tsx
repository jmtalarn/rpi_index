import React, { useState, useEffect } from 'react';

import { kebabCase } from '../utils/string-utils';
import FileBox from './FileBox';
import Grid from './Grid';
import ErrorMessage from './ErrorMessage';

// eslint-disable-next-line no-unused-vars
import { FileType } from './FileType';

type DocsProps = Readonly<{}>;

const Docs: React.SFC<DocsProps> = () => {
    const [hasError, setErrors] = useState(false);
    const [docs, setDocs]: [FileType[], Function] = useState([]);
    const path = 'videos';

    useEffect(() => {
        fetch(`http://192.168.0.22/json/${path}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setDocs(res);
            })
            .catch(() => setErrors(true));
    }, []);

    return (
        <>
            {hasError && <ErrorMessage>Something went wrong</ErrorMessage>}
            {docs.length > 0 && (
                <Grid>
                    {docs.map(doc => (
                        <FileBox key={kebabCase(doc.name)} focusKey={kebabCase(doc.name)} path={path} file={doc} />
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Docs;
