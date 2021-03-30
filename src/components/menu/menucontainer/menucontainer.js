import React from 'react';
import { bool } from 'prop-types';
/**
 * Styled Component import
 */
import { StyledMenu } from '../../../styledcomponents/menu-styled';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
              <Link to="/"><span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
          About us</Link>
              <Link to="/about"><span role="img" aria-label="price">&#x1f4b8;</span>
          Pricing</Link>
              <Link to="/users"><span role="img" aria-label="contact">&#x1f4e9;</span>
          Contact</Link>
          {/* <Sidebarlist>
                    <Sidebarlistlink>Item One</Sidebarlistlink>
                    <Sidebarlistlink>Item Two</Sidebarlistlink>
                    <Sidebarlistlink>Item Three</Sidebarlistlink>
                    <Sidebarlistlink>Item Four</Sidebarlistlink>
                    <Sidebarlistlink>Item Five</Sidebarlistlink>
                </Sidebarlist> */}
      </StyledMenu>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;