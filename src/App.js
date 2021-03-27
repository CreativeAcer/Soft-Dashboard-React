import React, { useState } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

import Layout from './components/layout/layout';
import { Wrap } from './styledcomponents/wrap';
import Main from './components/main/main';

function App() {
  const [open, setOpen] = useState(false);

  return (
    
    <ThemeProvider theme={theme}>
      <Wrap>
        <GlobalStyles />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Layout>
          <Main></Main>
        </Layout>
      </Wrap>
    </ThemeProvider>
    
  );
}

export default App;
