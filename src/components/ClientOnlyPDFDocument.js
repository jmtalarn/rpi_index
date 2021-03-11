import React, { useRef, useState, useEffect, Suspense, lazy } from 'react';

//const { Document } = React.lazy(() => import('react-pdf/dist/esm/entry.webpack'));
const PDFDocument = React.lazy(() => import('./DeferredPDFDocument'));
const PDFPage = React.lazy(() => import('./DeferredPDFPAge'));

const ClientOnlyPDFDocument = ({ file, pageNumber, height, onLoadSuccess }) => {
    console.log({ file, pageNumber, height, onLoadSuccess });
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);
    const isSSR = typeof window === 'undefined';

    if (hasMounted && !isSSR) {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <PDFDocument file={file}>
                        <PDFPage pageNumber={pageNumber} height={height} />
                    </PDFDocument>
                </Suspense>
            </div>
        );
    } else {
        return <div>Here comes a PDF file preview</div>;
    }
};

export default ClientOnlyPDFDocument;
