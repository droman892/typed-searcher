import './LayoutNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button } from 'react-materialize'

export const LayoutNavigation = () => {
    return (
        <header>
            <div className="section">
                <Navbar
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
                        <Icon className="nav-icon">apps</Icon>
                    </NavItem>
                    <Button node="a" className="nav-button">
                        <span>Sign in</span>
                    </Button>
                </Navbar>
            </div>
        </header>
    )
}
