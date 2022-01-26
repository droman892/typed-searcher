import './ResultsNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button } from 'react-materialize'
import { LayoutSideNavigation } from '../layoutSideNavigation/LayoutSideNavigation'
import { ResultsSearcher } from '../../resultsSearcher/ResultsSearcher'
import { ResultsNavigation2 } from '..//resultsNavigation2/ResultsNavigation2'
import GoogleLogo from '../../../assets/images/GoogleLogo.svg'
import userProfile from '../../../assets/images/userProfile.png'
import { ResultsMobileNavigation } from '../resultsMobileNavigation/ResultsMobileNavigation'
import { Link } from 'react-router-dom'

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
                                    <NavItem href="#" className="nav-gear">
                                        <Icon className="settings-icon">
                                            settings
                                        </Icon>
                                    </NavItem>
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

                    <div className="mobile-results-2">
                        <Link to="/" className="mobile-results-container">
                            <img
                                src={GoogleLogo}
                                alt="Google Logo"
                                className="results-container-image"
                            ></img>
                        </Link>
                        <div className="results-mobile-profile">
                            <a href="#!" className="results-profile-icon">
                                <img
                                    src={userProfile}
                                    alt="User Profile"
                                    className="user-profile"
                                ></img>
                            </a>
                        </div>
                    </div>
                    <div className="mobile-results-searcher">
                        <div>
                            <ResultsMobileNavigation />
                        </div>
                    </div>
                    <div className="mobile-results-items-container">
                        <div>
                            <div className="mobile-results-items-container-2">
                                <div className="mobile-results-items-container-3">
                                    <div className="mobile-results-item-first">
                                        All
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Maps
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Videos
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Shopping
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Images
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            News
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Books
                                        </a>
                                    </div>
                                    <div className="mobile-results-item">
                                        <a
                                            href="#!"
                                            className="mobile-results-item-a"
                                        >
                                            Flights
                                        </a>
                                    </div>
                                    <div className="mobile-results-tools">
                                        Search tools
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
