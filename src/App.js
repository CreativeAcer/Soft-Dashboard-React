import React, { useState } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Main, Header } from './components';
import { Wrap } from './styledcomponents/wrap';
import { GridWrap } from './styledcomponents/gridWrap-styled';

function App() {
  const [open, setOpen] = useState(false);

  return (
    
    <ThemeProvider theme={theme}>
      <Wrap>
        <GlobalStyles />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Header></Header>
        <GridWrap columns={"1fr 1fr 1fr 1fr"}>
          <Main></Main>
        </GridWrap>
      </Wrap>
    </ThemeProvider>
    
  );
}

export default App;
