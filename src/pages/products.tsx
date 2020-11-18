import React from 'react';
import { Link, graphql } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Img from 'gatsby-image';
import SEO from 'src/components/SEO';
import ProductList from 'src/components/ProductList';
import Typography from '@material-ui/core/Typography/Typography';

// <Img fixed={data.file.childImageSharp.fixed} />

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
    },
  })
);

interface Props {
  data: GatsbyTypes.usersTsuyoshiDocumentsjavascriptpracticegatsbygatsbyTypscriptSamplesrcpagesproductsTsx3776209724Query;
}

const ProductsPage: React.FC<Props> = ({ data }) => {
  console.log(data, '@@@@@@@@@data');

  const classes = useStyles();
  const { allShopifyProduct } = data;
  const products = allShopifyProduct!.edges!.map(
    e => e.node
  )! as GatsbyTypes.ShopifyProduct[];

  return (
    <Container maxWidth="lg" className={classes.root}>
      <SEO title="Products" />
      <Typography variant="h4" component="h1">
        Shopify関連
      </Typography>
      <ProductList products={products} />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Container>
  );
};

export default ProductsPage;

export const query = graphql`
  query {
    allShopifyProduct(sort: { fields: [title] }, limit: 10000) {
      totalCount
      edges {
        node {
          id
          title
          images {
            originalSrc
          }
          shopifyId
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }

    shopifyShop {
      description
      name
    }

    allShopifyCollection(limit: 10000) {
      totalCount
      edges {
        node {
          title
          handle
          products {
            id
            title
            descriptionHtml
            createdAt
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }

    allShopifyShopPolicy {
      totalCount
      edges {
        node {
          title
          handle
          body
          url
        }
      }
    }

    allShopifyArticle(sort: { fields: [publishedAt], order: DESC }) {
      totalCount
      nodes {
        id
        excerpt
        contentHtml
        publishedAt
        author {
          lastName
          firstName
          name
        }
      }
    }
  }
`;
