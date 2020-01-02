import PropTypes from 'prop-types';
import Head from 'next/head';
import React from 'react';

const Layout = props => (
  <div>
    <Head>
      <style>{`
         html {
           height: 100%;
           background: #F6F8FA;
         }
         #container {
           font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
           color: #4C555A;
           min-height: 100%;
           text-align: center;
           -webkit-font-smoothing: antialiased;
         }
         a {
           color: #00a3da;
         }
         a:hover {
           background-color: #fff2a8;
         }
      `}</style>
    </Head>
    <div id="container">
      {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

//<title>Serverless Stripe Checkout Example</title>
//<script src="https://js.stripe.com/v3/" />