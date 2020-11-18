import React from 'react';
import Container from '@material-ui/core/Container/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    featuredImage: {
      textAlign: 'center',
    },
    featuredImageContent: {
      width: '60%',
    },
  });
});

const ProductTemplate = ({ pageContext }: any) => {
  const classes = useStyles();

  const product = pageContext.product as GatsbyTypes.ShopifyProduct;
  const images = product?.images!;
  const imageUrl = images[0]?.originalSrc!;

  return (
    <Container>
      <div className={classes.featuredImage}>
        <img
          className={classes.featuredImageContent}
          src={imageUrl}
          alt={product.title}
        />
      </div>
      <Typography gutterBottom variant="h2" component="h1">
        {product.title}
      </Typography>
      <Typography gutterBottom variant="body2" component="p">
        {product.description}
      </Typography>
    </Container>
  );
};

export default ProductTemplate;
