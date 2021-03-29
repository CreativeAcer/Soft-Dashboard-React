import React, { useState } from 'react';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Main, Header, Login } from './components';
import { Wrap } from './styledcomponents/wrap';
import { GridWrap } from './styledcomponents/gridWrap-styled';

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import JsxWrapper from './hoc/jsxwrapper/jsxwrapper';

export const pca = new PublicClientApplication(msalConfig);

function App() {
  const [open, setOpen] = useState(false);

  return (
    <MsalProvider instance={pca}>
      <React.Fragment>
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrap>
        <Header></Header>
        <AuthenticatedTemplate>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
              <GridWrap columns={"1fr 1fr 1fr 1fr"}>
                <Main></Main>
              </GridWrap>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <Login></Login>
        </UnauthenticatedTemplate>
        </Wrap>
        </ThemeProvider>
      </React.Fragment>
    </MsalProvider>  
  );
}

export default App;
