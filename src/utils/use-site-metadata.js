import { useStaticQuery, graphql } from 'gatsby';
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        ip
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};
