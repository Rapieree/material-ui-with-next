import Head from "next/head";
import React from 'react';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>

      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
