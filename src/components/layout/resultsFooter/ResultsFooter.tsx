import './ResultsFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Footer } from 'react-materialize'

export const ResultsFooter = () => {
    return (
        <Footer
            className="page-footer"
            moreLinks={
                <>
                    <span className="left left-footer-container">
                        <a href="/#" className="footer-link">
                            Help
                        </a>
                        <a href="/#" className="footer-link">
                            Send feedback
                        </a>
                        <a href="/#" className="footer-link">
                            Privacy
                        </a>
                        <a href="/#" className="footer-link">
                            Terms
                        </a>
                    </span>
                </>
            }
        ></Footer>
    )
}
