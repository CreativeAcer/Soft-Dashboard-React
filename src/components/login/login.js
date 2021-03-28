import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';

/**
 * Styled Component import
 */
 import { Loginpage } from '../../styledcomponents/login-styled';
 import { Button } from '../../styledcomponents/button-styled';

const Login = (props) => {
    return (
        <JsxWrapper>
            <Loginpage>
                <Button>Login</Button>
            </Loginpage>
        </JsxWrapper>
    )
}

export default Login;