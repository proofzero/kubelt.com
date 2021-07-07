import React from 'react';
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero';
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
      <Hero />
      <Checkerboard />
      <Community />
      {/* <Logos /> */}
      <Features />
    </Layout>
  );
}
