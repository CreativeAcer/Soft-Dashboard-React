import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';
import { useMsal } from "@azure/msal-react";

/**
 * Styled Component import
 */
 import { Button } from '../../styledcomponents/button-styled';

const Login = (props) => {
    const { instance, inProgress } = useMsal();

    if (inProgress === "login") {
        return <span>Login is currently in progress!</span>
    } else {
        return (
            <JsxWrapper>
                    <Button onClick={() => instance.loginPopup({})}>Login</Button>
            </JsxWrapper>
        );
    }
    
}

export default Login;