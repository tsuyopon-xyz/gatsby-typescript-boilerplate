import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import ProductCard from 'src/components/ProductCard';

const useStyles = makeStyles((theme: Theme) => {
  console.log("theme.breakpoints.up('sm') : ", theme.breakpoints.up('sm'));
  console.log("theme.breakpoints.down('sm') : ", theme.breakpoints.down('sm'));
  console.log("theme.breakpoints.up('md') : ", theme.breakpoints.up('md'));
  console.log("theme.breakpoints.down('md') : ", theme.breakpoints.down('md'));
  console.log("theme.breakpoints.up('lg') : ", theme.breakpoints.up('lg'));
  console.log("theme.breakpoints.down('lg') : ", theme.breakpoints.down('lg'));

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
            <ProductCard imageUrl={imageUrl} title={title} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
