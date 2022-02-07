import './ResultsFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'

export const ResultsFooter = () => {
    return (
        <>
            <footer className="results-page-footer">
                <span className="results-footer-span">
                    <span className="results-footer-span-2">
                        <a href="/#" className="results-footer">
                            Help
                        </a>
                        <a
                            href="/#"
                            className="results-footer results-footer-link"
                        >
                            Send feedback
                        </a>
                        <a
                            href="/#"
                            className="results-footer results-footer-link"
                        >
                            Privacy
                        </a>
                        <a
                            href="/#"
                            className="results-footer results-footer-link"
                        >
                            Terms
                        </a>
                    </span>
                </span>
            </footer>

            <footer className="mobile-results-footer">
                <div className="mobile-results-footer-2">
                    <div>
                        <a href="#!" className="mobile-results-link">
                            Dark theme: off
                        </a>
                        <a href="#!" className="mobile-results-link">
                            Settings
                        </a>
                        <a href="#!" className="mobile-results-link">
                            Help
                        </a>
                        <a href="#!" className="mobile-results-link">
                            Feedback
                        </a>
                    </div>
                    <div>
                        <a href="#!" className="mobile-results-link">
                            Privacy
                        </a>
                        <a href="#!" className="mobile-results-link">
                            Terms
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
