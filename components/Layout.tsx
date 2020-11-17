import * as React from 'react';
import { ReactNode } from 'react';
import { Container, Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import IndexPageHead from './Header';

type LayoutProps = {
  children?: ReactNode,
  title?: string,
  theme?: Theme
}

const Layout: React.FC<LayoutProps> = ({
                                         children,
                                         title = 'Learning Links',
                                       }) => {
  return (
    <Container component={'main'} maxWidth={'md'}>

      <CssBaseline />
      <IndexPageHead title={title} />

      {children}

    </Container>
  );
};

export default Layout;
