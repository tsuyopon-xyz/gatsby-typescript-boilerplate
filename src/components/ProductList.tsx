import React from 'react';
import { Link } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from 'src/components/ProductCard';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.up('md')]: {
        width: '33%',
      },
      transition: 'width .2s',
    },
  });
});

interface Props {
  products: GatsbyTypes.ShopifyProduct[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {products.map(product => {
        const images = product?.images!;
        const imageUrl = images[0]?.originalSrc!;
        const title = product.title!;

        return (
          <Grid key={product.id} item className={classes.card}>
            <Link to={`/product/${product.handle}`}>
              <ProductCard imageUrl={imageUrl} title={title} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
