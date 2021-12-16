import './LayoutNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem } from 'react-materialize'

export const LayoutNavigation = () => {
    return (
        <header>
            <Navbar
                alignLinks="right"
                brand={
                    <a className="brand-logo" href="#somewhere">
                        Logo
                    </a>
                }
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    outDuration: 200,
                    preventScrolling: true,
                }}
            >
                <NavItem href="">Getting started</NavItem>
                <NavItem href="components.html">Components</NavItem>
            </Navbar>
        </header>
    )
}
