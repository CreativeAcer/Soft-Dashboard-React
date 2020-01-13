import React from 'react';
import './App.css';
import Layout from './components/layout/layout';

import { Wrap } from './styledcomponents/wrap';
import Main from './components/main/main';

function App() {
  return (
    <Wrap>
      <Layout>
        <Main></Main>
      </Layout>
    </Wrap>
  );
}

export default App;
