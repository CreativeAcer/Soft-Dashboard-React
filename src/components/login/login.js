import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';
import { useMsal } from "@azure/msal-react";

/**
 * Styled Component import
 */
 import { Loginpage } from '../../styledcomponents/login-styled';
 import { Button } from '../../styledcomponents/button-styled';

const Login = (props) => {
    const { instance, inProgress } = useMsal();

    if (inProgress === "login") {
        return <span>Login is currently in progress!</span>
    } else {
        return (
            <JsxWrapper>
                <Loginpage>
                    <Button onClick={() => instance.loginPopup({})}>Login</Button>
                </Loginpage>
            </JsxWrapper>
            
        );
    }
    
}

export default Login;