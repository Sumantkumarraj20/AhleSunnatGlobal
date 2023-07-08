import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title} - AhleSunnat Global</title>
        <meta name="description" content={description} />
        {/* Add other meta tags here */}
      </Helmet>
      {/* Add your common layout structure */}
      {children}
    </>
  );
};

export default Layout;
