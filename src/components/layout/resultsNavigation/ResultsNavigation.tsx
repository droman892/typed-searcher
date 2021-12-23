import './ResultsNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button } from 'react-materialize'
import { LayoutSideNavigation } from '../layoutSideNavigation/LayoutSideNavigation'

export const ResultsNavigation = () => {
    return (
        <header className="header-results">
            <div className="section-results">
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
                    sidenav={<LayoutSideNavigation className="wow" />}
                >
                    <div className="nav-container-results">
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
                        <div className="nav-container-right-results">
                            <div className="gear-container">
                                <div className="gear-container-2">
                                    <div className="gear-container-3">
                                        <div className="gear-container-4">
                                            <NavItem
                                                href="#"
                                                className="nav-gear"
                                            >
                                                <span className="nav-gear-2">
                                                    <Icon className="settings-icon">
                                                        settings
                                                    </Icon>
                                                </span>
                                            </NavItem>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-item-container nav-apps-container">
                                <NavItem href="#" className="nav-item-apps">
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
