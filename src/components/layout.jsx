import {CssBaseline} from "@mui/material";
import Head from "next/head";
import React from 'react';
import MainFrame from "./main-frame";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>

      <main>
        <CssBaseline />
        <MainFrame title={`Test`}>

        </MainFrame>
        {children}
      </main>
    </>
  );
};

export default Layout;
