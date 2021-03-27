import React, {useState} from 'react';
import './layout.css';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';

/**
 * Styled Components
 */
import { Maincomponent } from '../../styledcomponents/maincomponent';
import { Sidebar } from '../../styledcomponents/sidebar';
import { Sidebarlist } from '../../styledcomponents/sidebarlist';
import { Sidebarlistlink } from '../../styledcomponents/sidebarlistlink';
import { Header } from '../../styledcomponents/header';


const Layout = (props) => {

    const [sidebar, sidebarfn] = useState({show: true});
    const [open, setOpen] = useState(false);

    const hideBar = () => {
        sidebarfn({
            ...sidebar,
            show: !sidebar.show
        });
    };


    return (
        <JsxWrapper>
            <Header>header
                <button onClick={hideBar}>hide</button>
                <p>Site title</p>
            </Header>
            {/* <Sidebar className={sidebar.show ? 'Sidebar show' : 'Sidebar hide'}  >Sidebar
                
            </Sidebar> */}
            <Maincomponent>{props.children}</Maincomponent>
        </JsxWrapper>)
};

export default Layout;