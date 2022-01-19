import './LayoutNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button } from 'react-materialize'
import { LayoutSideNavigation } from '../layoutSideNavigation/LayoutSideNavigation'

export const LayoutNavigation = () => {
    return (
        <header className="header-home">
            <div className="section">
                <Navbar
                    id="mobile-nav"
                    // extendWith={<MobileNav />}
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        outDuration: 200,
                        preventScrolling: true,
                    }}
                    sidenav={<LayoutSideNavigation />}
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

                            <div className="nav-item-container nav-apps-container">
                                <NavItem href="#" className="nav-item-apps">
                                    <Icon className="apps-icon">apps</Icon>
                                </NavItem>
                            </div>

                            <div className="nav-item-container">
                                <Button node="a" className="nav-button">
                                    <span className="sign-in">Sign in</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-header" className="mobile-header">
                        {/* <div className="icon-space"></div> */}
                        <div className="all-images">
                            <a href="#!" className="all">
                                All
                            </a>
                            <a href="#!" className="images">
                                Images
                            </a>
                        </div>
                        <div className="mobile-spacer"></div>
                        <div className="mobile-right-container">
                            <div className="auto">
                                <div className="mobile-right-container-2">
                                    <div className="mobile-right-container-3">
                                        <div className="inline-div">
                                            <div className="mobile-apps-container">
                                                <div className="mobile-apps-container-2">
                                                    <a
                                                        href="#!"
                                                        className="mobile-apps"
                                                    >
                                                        <Icon>apps</Icon>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#!" className="mobile-sign-in">
                                            Sign in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
        </header>
    )
}
