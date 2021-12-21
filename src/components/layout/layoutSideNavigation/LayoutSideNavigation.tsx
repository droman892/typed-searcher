import './LayoutSideNavigation.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import home from '../../../assets/images/home.png'
import searchHistory from '../../../assets/images/searchHistory.png'
import collections from '../../../assets/images/collections.png'
import settings from '../../../assets/images/settings.png'
import data from '../../../assets/images/data.png'
import explicit from '../../../assets/images/explicit.png'
import darkTheme from '../../../assets/images/darkTheme.png'
import howSearchWorks from '../../../assets/images/howSearchWorks.png'
import help from '../../../assets/images/help.png'
import feedback from '../../../assets/images/feedback.png'

export const LayoutSideNavigation = () => {
    return (
        <>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={home}
                        alt="Home"
                        className="side-nav-item-image"
                    />
                    Home
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={searchHistory}
                        alt="Search History"
                        className="side-nav-item-image"
                    />
                    Search History
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={collections}
                        alt="Collections"
                        className="side-nav-item-image"
                    />
                    Collections
                </a>
            </div>
            <div className="line"></div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={settings}
                        alt="Horizontal Line"
                        className="side-nav-item-image"
                    />
                    Settings
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={data}
                        alt="Data"
                        className="side-nav-item-image"
                    />
                    Your data in Search
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={explicit}
                        alt="Explicit"
                        className="side-nav-item-image"
                    />
                    Hide explicit results: off
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={darkTheme}
                        alt="Dark Theme"
                        className="side-nav-item-image"
                    />
                    Dark theme: off
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={howSearchWorks}
                        alt="How Search Works"
                        className="side-nav-item-image"
                    />
                    How Search works
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={help}
                        alt="Help"
                        className="side-nav-item-image"
                    />
                    Help
                </a>
            </div>
            <div className="side-nav-container">
                <a className="side-nav-item" href="#!">
                    <img
                        src={feedback}
                        alt="Feedback"
                        className="side-nav-item-image"
                    />
                    Send feedback
                </a>
            </div>
        </>
    )
}
