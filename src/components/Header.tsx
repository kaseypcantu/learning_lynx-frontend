import Head from 'next/head';
import * as React from 'react';
import { Theme } from '@material-ui/core';

type IndexHeadProps = {
  title?: string;
  theme?: Theme;
};

const IndexPageHead: React.FC<IndexHeadProps> = ({ title = 'Learning Links' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default IndexPageHead;
