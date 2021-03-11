import * as React from 'react';
import Layout from '../components/layout';
import FilesList from '../components/FilesList';
import Page from '../components/Page';

// markup
const DocsPage = () => {
    return (
        <Layout>
            <Page title="Docs list" backButton>
                <FilesList path="docs" />
            </Page>
        </Layout>
    );
};

export default DocsPage;
