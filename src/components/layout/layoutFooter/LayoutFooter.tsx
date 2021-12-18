import './LayoutFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Footer } from 'react-materialize'
import footerLeaf from '../../../assets/images/footerLeaf.png'

export const LayoutFooter = () => {
    return (
        <Footer
            moreLinks={
                <>
                    <div className="footer-divider">
                        <span className="left left-footer-container">
                            <span className="footer-text">
                                <a href="/#" className="footer-link">
                                    Advertising
                                </a>
                            </span>
                            <span className="footer-text">
                                <a href="/#" className="footer-link">
                                    Business
                                </a>
                            </span>
                            <span className="footer-text hide-on-small-only">
                                <a href="/#" className="footer-link">
                                    How Search Works
                                </a>
                            </span>
                            <span className="footer-text hide-on-med-and-up">
                                <a href="/#" className="footer-link">
                                    About
                                </a>
                            </span>
                        </span>
                    </div>

                    <div className="footer-divider">
                        <span className="center-footer-container hide-on-med-and-down">
                            <span className="footer-text">
                                <a href="/#" className="footer-link">
                                    <img
                                        src={footerLeaf}
                                        alt="Footer Leaf"
                                        className="footer-leaf"
                                    />
                                    Carbon neutral since 2007
                                </a>
                            </span>
                        </span>
                    </div>

                    <div className="footer-divider">
                        <span className="right right-footer-container">
                            <span className="footer-text">
                                <a href="/#" className="footer-link">
                                    Privacy
                                </a>
                            </span>
                            <span className="footer-text">
                                <a href="/#" className="footer-link">
                                    Terms
                                </a>
                            </span>
                            <span className="footer-text">
                                <a href="/#" className="footer-link">
                                    Settings
                                </a>
                            </span>
                        </span>
                    </div>
                </>
            }
        ></Footer>
    )
}
