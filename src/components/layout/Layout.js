import React from 'react';
import { Helmet } from "react-helmet"
import Header from './Header';
import Footer from './Footer';
import Banner from '../Banner';

const isBrowser = typeof window !== "undefined"
let prefinery = null

const Layout = ({ children }) => {
  return (
    <>
      { isBrowser ? prefinery=window.prefinery||function(){(window.prefinery.q=window.prefinery.q||[]).push(arguments)} : null}
      <Helmet>
        <script src="https://widget.prefinery.com/widget/v2/dqialf2i.js" defer></script>
        <script src="https://embed.typeform.com/next/embed.js" defer></script>
      </Helmet>
      <div class="min-h-screen">
          <div class="relative overflow-hidden">
          <Banner />
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
