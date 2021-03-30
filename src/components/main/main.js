import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

/**
 * Styled Component import
 */
import { Softcard } from '../../styledcomponents/card-styled';

const Main = (props) => {
    return (
        <Switch>
          <Route path="/about">
            {/* <About /> */}
            <JsxWrapper>
             <Softcard>ABOUT</Softcard>
             <Softcard>Softcard</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
         </JsxWrapper>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
            <JsxWrapper>
             <Softcard>USERS</Softcard>
             <Softcard>Softcard</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
         </JsxWrapper>
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <JsxWrapper>
             <Softcard>HOME</Softcard>
             <Softcard>Softcard</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
             <Softcard>Main</Softcard>
         </JsxWrapper>
          </Route>
        </Switch>
        // <JsxWrapper>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Softcard</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        //     <Softcard>Main</Softcard>
        // </JsxWrapper>
    )
}

export default Main;