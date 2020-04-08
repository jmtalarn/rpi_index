import React, { useRef } from 'react';
import { useFocusable } from 'react-sunbeam';
import { Link as RouterLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { formatDateToShortDateString, formatFileSizeMetric } from '../utils/format-utils';
import styled from 'styled-components';
import { Document as PDFDocument, Page as PDFPage } from 'react-pdf';
// eslint-disable-next-line no-unused-vars
import { FileType } from './FileType';

const FileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    height: 100%;
`;
const FileContent = styled.div`
    min-height: 200px;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

const StyledBox = styled(RouterLink)`
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    background-color: ${props => props.theme.fileBox.backgroundColor};
    padding: 1rem;
    word-break: break-word;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${props => props.theme.boxShadow.light};
    &,
    & * {
        opacity: 0.7;
    }

    transition: all 200ms ease-in;

    &.focused,
    &:focus,
    &:active,
    &:hover {
        box-shadow: ${props => props.theme.boxShadow.intense};
        opacity: 1;
        * {
            opacity: 1;
        }
    }
`;
type BoxProps = Readonly<{ focusKey: string; path: string; file: FileType }>;
const Box: React.SFC<BoxProps> = ({ focusKey, file, path }: BoxProps) => {
    // eslint-disable-next-line no-unused-vars
    const elementRef = useRef<any>(null);

    const { focused } = useFocusable({
        focusKey,
        elementRef,
        onKeyPress(event) {
            if (event.key === 'Enter') {
                event.stopPropagation();
                if (elementRef && elementRef.current) {
                    elementRef?.current?.click();
                }
            }
        },
    });

    let previewFile = null;
    if (path === 'docs') {
        previewFile = (
            <PDFDocument file={`http://192.168.0.22/files/${path}/${file.name}`}>
                <PDFPage pageNumber={1} height={200} />
            </PDFDocument>
        );
    }
    if (path === 'videos') {
        previewFile = <ReactPlayer url={`http://192.168.0.22/files/${path}/${file.name}`} width={300} height={200} />;
    }
    return (
        <StyledBox className={focused ? 'focused' : ''} to={`/doc/${path}/${file.name}`} ref={elementRef}>
            <h3>{file.name}</h3>
            <FileContent>
                {previewFile}
                <FileInfo>
                    <h4>{formatDateToShortDateString(file.mtime)}</h4>
                    <h4>{formatFileSizeMetric(file.size)}</h4>
                </FileInfo>
            </FileContent>
        </StyledBox>
    );
};
export default Box;
