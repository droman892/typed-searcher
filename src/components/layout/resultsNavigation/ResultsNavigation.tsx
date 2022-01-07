import './ResultsNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button } from 'react-materialize'
import { LayoutSideNavigation } from '../layoutSideNavigation/LayoutSideNavigation'
import { ResultsSearcher } from '../../resultsSearcher/ResultsSearcher'
import { ResultsNavigation2 } from '..//resultsNavigation2/ResultsNavigation2'

export const ResultsNavigation = () => {
    return (
        <header>
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
                    sidenav={<LayoutSideNavigation />}
                >
                    <div className="nav-container-results">
                        <ResultsSearcher />
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

                            <div className="container-0">
                                <div className="button-apps-container">
                                    <div className="results-nav-item-container">
                                        <div className="results-nav-item-container-2">
                                            <NavItem
                                                href="#"
                                                className="results-nav-item-apps"
                                            >
                                                <Icon className="results-apps-icon">
                                                    apps
                                                </Icon>
                                            </NavItem>
                                        </div>
                                    </div>

                                    <div className="results-nav-item-container">
                                        <Button
                                            node="a"
                                            className="results-nav-button"
                                        >
                                            <span className="results-sign-in">
                                                Sign in
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </div>
            <ResultsNavigation2 />
        </header>
    )
}
