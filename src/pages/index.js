import React from 'react';
import Layout from '../components/layout/Layout'
import Preview from '../components/Preview';
import Checkerboard from '../components/Checkerboard';
import Community from '../components/Community';
import Features from '../components/Features';
import SEO from '../components/SEO';
// import { SEO, useSEO } from "gatsby-plugin-seo";
import Logos from '../components/Logos';

export default () => {
  return (
    <Layout>
      <SEO />
      {/* <SEO title="kubelt" description="" pagePath="/"/> */}
      <Preview />
      { /* <Checkerboard /> */}
      {/*<Community /> */}
      {/* <Logos /> */}
      { /* <Features /> */}
    </Layout>
  );
}
