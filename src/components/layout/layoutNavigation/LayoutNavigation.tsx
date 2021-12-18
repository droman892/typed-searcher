import './LayoutNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem } from 'react-materialize'

export const LayoutNavigation = () => {
    return (
        <header>
            <Navbar
                alignLinks="left"
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
                <NavItem href="#" className="nav-item">
                    About
                </NavItem>
                <NavItem href="#" className="nav-item">
                    Store
                </NavItem>
                <NavItem href="#" className="nav-item">
                    Gmail
                </NavItem>
                <NavItem href="#" className="nav-item">
                    Images
                </NavItem>
                <NavItem href="#" className="nav-item">
                    <i className="fa fa-check"></i>
                </NavItem>
            </Navbar>
        </header>
    )
}
