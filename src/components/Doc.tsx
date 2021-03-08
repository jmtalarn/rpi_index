import React, { useState, useCallback, useEffect } from 'react';

import styled from 'styled-components';

import { Document as PDFDocument, Page as PDFPage } from 'react-pdf';
import Page from './Page';

type DocProps = Readonly<{ filename: string | undefined; path: string | undefined }>;
const PageCenteredContent = styled(Page)`
    .react-pdf__Page {
        position: relative !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
`;

const Doc: React.SFC<DocProps> = ({ filename, path }: DocProps) => {
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const onDocumentLoadSuccess = (document: any) => {
        const { numPages } = document;

        setNumPages(numPages);
    };
    const onKeyDown = useCallback(
        event => {
            if (!(event instanceof KeyboardEvent)) return;
            switch (event.key) {
                case 'ArrowRight':
                    if (currentPage < numPages) {
                        setCurrentPage(currentPage + 1);
                    }
                    return;
                case 'ArrowLeft':
                    if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                    }
                    return;
            }
        },
        [currentPage, setCurrentPage, numPages],
    );
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <PageCenteredContent title={filename || 'NO_NAME'} backButton>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PDFDocument
                    file={`http://${process.env.REACT_APP_IP_ADDRESS}/files/${path}/${filename}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <PDFPage className="center" pageNumber={currentPage} height={700} />
                </PDFDocument>
            </div>
        </PageCenteredContent>
    );
};

export default Doc;
