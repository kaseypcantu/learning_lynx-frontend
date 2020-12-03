import * as React from 'react';
import { ReactNode } from 'react';
import { Container, Theme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import IndexPageHead from './Header';
import { lightTheme } from '../types/themes/themes';

export type LayoutProps = {
  children?: ReactNode;
  title?: string;
  theme?: Theme;
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
const Layout: React.FC<LayoutProps> = ({ children, title = 'Learning Links' }) => {
  return (
    // TODO: Implement dynamic dark-theme toggle.
    <ThemeProvider theme={lightTheme}>
      <Container component={'main'} maxWidth={'md'}>
        <IndexPageHead title={title} />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
