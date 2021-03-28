import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';

/**
 * Styled Component import
 */
import { StyledHeader } from '../../styledcomponents/header-styled';

const Header = (props) => {
    return (
        <JsxWrapper>
            <StyledHeader>
                <p>Site title</p>
            </StyledHeader>
        </JsxWrapper>
    )
}

export default Header;