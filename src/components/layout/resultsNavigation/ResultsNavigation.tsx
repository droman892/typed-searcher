import './ResultsNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Navbar, Icon, NavItem, Button, TextInput } from 'react-materialize'
import { LayoutSideNavigation } from '../layoutSideNavigation/LayoutSideNavigation'
import GoogleLogo from '../../../assets/images/GoogleLogo.svg'
import magnifyingGlass from '../../../assets/images/magnifyingGlass.png'
import theX from '../../../assets/images/theX.png'
import microphone from '../../../assets/images/microphone.png'

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
                        <form className="results-form-container-1">
                            <div id="container">
                                <div className="results-form-container-2">
                                    <div className="results-logo-container">
                                        <a href="#!">
                                            <img
                                                src={GoogleLogo}
                                                alt="Results Page Logo"
                                                className="results-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="results-query-container-1">
                                        <div className="results-query-container-2">
                                            <div className="results-query-container-3">
                                                <div className="results-query-input">
                                                    <div className="results-query-input-1">
                                                        <TextInput
                                                            id="query"
                                                            inputClassName="results-input"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="results-x-microphone">
                                                    <div className="results-x">
                                                        <span className="results-x-2">
                                                            <img
                                                                src={theX}
                                                                alt="X"
                                                                className="x"
                                                            />
                                                        </span>
                                                        <div className="results-line" />
                                                    </div>

                                                    <div className="results-microphone">
                                                        <img
                                                            src={microphone}
                                                            alt="Microphone"
                                                            className="results-microphone-image"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="results-query-button-container-1">
                                                <div className="results-query-button-container-2">
                                                    <span className="results-query-button-container-3">
                                                        <img
                                                            src={
                                                                magnifyingGlass
                                                            }
                                                            alt="Magnifying Glass"
                                                            className="results-glass-image"
                                                        />
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
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
        </header>
    )
}
