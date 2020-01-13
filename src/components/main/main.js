import React, {useState} from 'react';
import './main.css';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';

/**
 * Styled Component import
 */
import { Softcard } from '../../styledcomponents/card';

const Main = (props) => {
    return (
        <JsxWrapper>
            <Softcard>Main</Softcard>
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
    )
}

export default Main;