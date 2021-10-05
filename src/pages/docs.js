import React from 'react';
import { Helmet } from "react-helmet"
import SEO from '../components/SEO';

export default () => {
  return (
    <>
      <SEO />
      <Helmet>
        <meta http-equiv="refresh" content="0; https://pkg.go.dev/kubelt.com/kubelt"></meta>
      </Helmet>
    </>
  );
}
