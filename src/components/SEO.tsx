import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import metaImage from "../images/icon.png";

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

const SEO: React.FC<SEOPropTypes> = ({ meta = [], title = "", description, slug = "", lang = "en" }) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { siteMetadata } = data.site;
        const metaDescription = description || siteMetadata.description;
        const metaImages = { og: metaImage, twitter: metaImage };
        const getMetaImageUrl = (image: string) => `${siteMetadata.siteUrl}${image}`;
        const url = `${siteMetadata.siteUrl}${slug}`;
        const twitterUrl = "@GCOIN2022";
        return (
          <Helmet
            htmlAttributes={{ lang }}
            {...(title
              ? {
                  titleTemplate: `%s — ${siteMetadata.title}`,
                  title,
                }
              : {
                  title: `${siteMetadata.title} — Official website`,
                })}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:url",
                content: url,
              },
              {
                property: "og:title",
                content: title || siteMetadata.title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: twitterUrl,
              },
              {
                name: "twitter:title",
                content: title || siteMetadata.title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ]
              .concat([
                {
                  property: "og:image",
                  content: getMetaImageUrl(metaImages.og),
                },
                {
                  name: "twitter:image",
                  content: getMetaImageUrl(metaImages.twitter),
                },
              ])
              .concat(meta)}
          />
        );
      }}
    />
  );
};

interface SEOPropTypes {
  description: string;
  meta?: any[];
  slug: string;
  title: string;
  lang?: string;
}

export default SEO;
