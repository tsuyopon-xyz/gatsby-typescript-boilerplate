import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import theme from 'src/themes/theme';

const SITE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(SITE_QUERY);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site!.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
