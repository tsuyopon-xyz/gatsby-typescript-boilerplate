import { join } from 'path';
import dotEnv from 'dotenv';

dotEnv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

export default {
  siteMetadata: {
    title: 'LMS 4 JS&TS',
    description: 'Gatsby + TypeScript + Material-UIで構築',
    author: '@tsuyopon_xyz',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: join(process.cwd(), 'src'),
      },
    },
    `gatsby-plugin-typegen`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.SHOPIFY_SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: '2020-10',
      },
    },
  ],
};
