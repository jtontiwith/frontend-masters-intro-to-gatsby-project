import * as React from "react";
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby";

const Seo = (props) => {
    const data = useStaticQuery(graphql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `)
    const defaults = data?.site?.siteMetadata
    
    const title = props.title || defaults.title
    const description = props.description || defaults.description
    const image = new URL(props.image || defaults.image, defaults.siteUrl)

    const url = new URL(props.path || '/', defaults.siteUrl)
    return(
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {image && <meta name='image' content={image} />}

        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        {image && <meta name='og:image' content='image' />}

        {/* could have twitter stuff here */}
      </Helmet>
    );
};

export default Seo;