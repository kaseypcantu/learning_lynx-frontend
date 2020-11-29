import * as React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LayoutProps } from '../components/Layout';

/**
 * The wrapper for all pages. Provides a place for site-wide functionality, such as error handling,
 * persisting data, maintaining state between pages, etc.
 *
 * ATTN: Do not add HTML output here. Use a layout component instead
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const LearningLynxApp: React.FC<AppProps<LayoutProps>> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Component {...pageProps} >
      <CssBaseline />
    </Component>
  );
};

export default LearningLynxApp;


