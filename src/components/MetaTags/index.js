import React from 'react';
import { Helmet } from 'react-helmet';

export function MetaTags({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
}
