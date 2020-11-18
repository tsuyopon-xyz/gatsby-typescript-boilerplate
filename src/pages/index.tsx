import React from 'react';
import { Link } from 'gatsby';
import Image from 'src/components/Image';
import SEO from 'src/components/SEO';

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/products/">Go to products</Link> <br />
  </>
);

export default IndexPage;
