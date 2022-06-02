import {CssBaseline, Grid} from "@mui/material";
import Head from "next/head";
import React from 'react';
import Navigation from "./navigation";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>

      <main>
        <CssBaseline />
        <Grid container>
          <Navigation></Navigation>
        </Grid>
        {children}
      </main>
    </>
  );
};

export default Layout;
