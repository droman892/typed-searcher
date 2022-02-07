import './LayoutFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Footer } from 'react-materialize'
import footerLeaf from '../../../assets/images/footerLeaf.png'

export const LayoutFooter = () => {
    return (
        <Footer
            className="custom-page-footer"
            moreLinks={
                <>
                    <span className="left left-footer-container">
                        <a href="/#" className="footer-link">
                            Advertising
                        </a>
                        <a href="/#" className="footer-link">
                            Business
                        </a>
                        <a href="/#" className="footer-link hide-on-small-only">
                            How Search Works
                        </a>
                        <span className="footer-text hide-on-med-and-up">
                            <a href="/#" className="footer-link">
                                About
                            </a>
                        </span>
                    </span>

                    {/* this span below originally had hide-on-med-and-down */}

                    <span className="center-footer-container hide-on-small-only">
                        <a href="/#" className="footer-link">
                            <img
                                src={footerLeaf}
                                alt="Footer Leaf"
                                className="footer-leaf"
                            />
                            Carbon neutral since 2007
                        </a>
                    </span>

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
                </>
            }
        ></Footer>
    )
}
