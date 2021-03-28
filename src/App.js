import React, { useState } from 'react';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Main, Header, Login } from './components';
import { Wrap } from './styledcomponents/wrap';
import { GridWrap } from './styledcomponents/gridWrap-styled';

function App() {
  const [open, setOpen] = useState(false);

  return (
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
    
    
  );
}

export default App;
