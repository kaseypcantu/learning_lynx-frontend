import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import IndexPageHead from '../components/Header';
import * as React from 'react';
import { mainTheme } from '../types/themes/themes';
import { ServerStyleSheets } from '@material-ui/core';

// Custom Document in Next.js, see more here: https://nextjs.org/docs/advanced-features/custom-document
export default class LearningLynxDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
  //   return await Document.getInitialProps(ctx);
  // }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

          {/* PWA primary color */}
          <meta name="theme-color" content={mainTheme.palette.primary.main} />
          <meta
            name="description"
            content="Learning Links - A place where you can organize resources and links you want to learn from."
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
LearningLynxDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  // Resolution order

  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = async () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
