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
                    sidenav={<li>SIDE NAVIGATION!</li>}
                >
                    <div className="nav-container">
                        <div className="nav-container-left">
                            <div className="nav-item-container">
                                <NavItem href="#" className="nav-item">
                                    About
                                </NavItem>
                            </div>
                            <div className="nav-item-container">
                                <NavItem href="#" className="nav-item">
                                    Store
                                </NavItem>
                            </div>
                        </div>
                        <div className="nav-container-right">
                            <div className="nav-item-container">
                                <NavItem href="#" className="nav-item">
                                    Gmail
                                </NavItem>
                            </div>
                            <div className="nav-item-container">
                                <NavItem href="#" className="nav-item">
                                    Images
                                </NavItem>
                            </div>

                            <div className="nav-item-container">
                                <NavItem href="#" className="nav-item">
                                    <Icon>apps</Icon>
                                </NavItem>
                            </div>

                            <div className="nav-item-container">
                                <Button node="a" className="nav-button">
                                    <span className="sign-in">Sign in</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        </header>
    )
}
