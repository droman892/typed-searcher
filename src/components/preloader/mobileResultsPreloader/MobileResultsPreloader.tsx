import './MobileResultsPreloader.scss'
import '../../../styles/_index.scss'
import { Preloader } from 'react-materialize'

export const MobileResultsPreloader = () => {
    const mobileSorryNotice = () => {
        document
            .getElementById('mobile-preloader')
            ?.classList.add('mobile-none')
        document
            .getElementById('mobile-notice-container')
            ?.classList.add('mobile-flex')
    }

    setTimeout(mobileSorryNotice, 8000)

    return (
        <>
            <div id="mobile-preloader" className="mobile-preloader">
                <Preloader
                    active
                    color="green"
                    flashing={false}
                    size="big"
                    className="mobile-preloader-container-1"
                />
            </div>

            <div
                className="mobile-notice-container"
                id="mobile-notice-container"
            >
                <div className="mobile-notice">
                    <h5 className="mobile-load-header">
                        Oops! - 500: Internal Server Error
                    </h5>
                    <h6 className="mobile-explanation load-text mobile-load-header">
                        Looks like something happened with the server...
                    </h6>
                    <h6 className="mobile-explanation mobile-load-text">
                        Recommended Troubleshooting:
                    </h6>
                    <h6 className="mobile-load-text">- Refresh the page</h6>
                    <h6 className="mobile-load-text">- Try again later</h6>
                    <h6 className="mobile-load-text">
                        - Contact our{' '}
                        <a
                            href="https://www.linkedin.com/in/david-roman-%E2%98%85-software-engineer/"
                            target="_blank"
                            className="mobile-support"
                            rel="noreferrer"
                        >
                            support team
                        </a>
                    </h6>
                </div>
            </div>
        </>
    )
}
