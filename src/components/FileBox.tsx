import React, { useRef } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import ReactPlayer from 'react-player';
import { formatDateToShortDateString, formatFileSizeMetric } from '../utils/format-utils';
import { isVideoFile, isPdfFile } from '../utils/file-utils';
import styled from 'styled-components';
import { Page as PDFPage } from 'react-pdf';
import { Document as PDFDocument } from 'react-pdf/dist/esm/entry.webpack';
// eslint-disable-next-line no-unused-vars
import { FileType } from './FileType';
import { useSiteMetadata } from '../utils/use-site-metadata';

const FileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    height: 100%;
    font-size: 0.8rem;
    min-width: 5rem;
`;
const FileContent = styled.div`
    min-height: 200px;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

const StyledBox = styled(GatsbyLink)`
    color: ${(props) => props.theme.textColor};
    font-size: 1rem;
    background-color: ${(props) => props.theme.fileBox.backgroundColor};
    padding: 1rem;
    word-break: break-word;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${(props) => props.theme.boxShadow.light};
    &,
    & * {
        opacity: 0.7;
    }

    transition: all 200ms ease-in;

    &.focused,
    &:focus,
    &:active,
    &:hover {
        box-shadow: ${(props) => props.theme.boxShadow.intense};
        opacity: 1;
        * {
            opacity: 1;
        }
    }
`;
type BoxProps = Readonly<{ focusKey: string; path: string; file: FileType }>;
const Box: React.SFC<BoxProps> = ({ focusKey, file, path }: BoxProps) => {
    const { ip: ipAddress } = useSiteMetadata();

    // eslint-disable-next-line no-unused-vars
    const elementRef = useRef<any>(null);

    let previewFile = null;

    if (isPdfFile(file.name)) {
        previewFile = (
            <PDFDocument file={`http://${ipAddress}/files/${path}/${file.name}`}>
                <PDFPage pageNumber={1} height={200} />
            </PDFDocument>
        );
    } else if (isVideoFile(file.name)) {
        previewFile = <ReactPlayer url={`http://${ipAddress}/files/${path}/${file.name}`} width={300} height={200} />;
    }

    return (
        <StyledBox to={`/viewer/?path=${path}&filename=${file.name}`} ref={elementRef}>
            <h3>{file.name}</h3>
            <FileContent>
                {previewFile}
                <FileInfo>
                    <p>{formatDateToShortDateString(file.mtime)}</p>
                    <p>{formatFileSizeMetric(file.size)}</p>
                </FileInfo>
            </FileContent>
        </StyledBox>
    );
};

export default Box;
