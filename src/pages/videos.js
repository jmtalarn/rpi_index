import * as React from 'react';
import Layout from '../components/layout';
import FilesList from '../components/FilesList';
import Page from '../components/Page';

// markup
const DocsPage = () => {
    return (
        <Layout>
            <Page title="Videos list" backButton>
                <FilesList path="videos" />
            </Page>
        </Layout>
    );
};

export default DocsPage;
