import './ResultsPreloader.scss'
import '../../styles/_index.scss'
import { Preloader } from 'react-materialize'

export const ResultsPreloader = () => {
    const sorryNotice = () => {
        document.getElementById('preloader')?.classList.add('none')
        document.getElementById('notice-container')?.classList.add('flex')
    }

    setTimeout(sorryNotice, 3000)

    return (
        <>
            {/* <div id="preloader" className="preloader">
                <Preloader
                    active
                    color="green"
                    flashing={false}
                    size="big"
                    className="preloader-container-1"
                />
            </div> */}

            <div id="preloader" className="preloader">
                <Preloader
                    active
                    color="green"
                    flashing={false}
                    size="big"
                    className="preloader-container-1"
                />
            </div>

            <div className="notice-container" id="notice-container">
                <div className="notice">
                    <h4>Oops! - 500: Internal Server Error</h4>
                    <h5 className="explanation">
                        Looks like something happened with the server...
                    </h5>
                    <h5 className="troubleshoot">
                        Recommended Troubleshooting:
                    </h5>
                    <h5>- Refresh the page</h5>
                    <h5>- Try again later</h5>
                    <h5>
                        - Contact our{' '}
                        <a
                            href="https://www.linkedin.com/in/david-roman-%E2%98%85-software-engineer/"
                            target="_blank"
                            className="support"
                            rel="noreferrer"
                        >
                            support team
                        </a>{' '}
                    </h5>
                </div>
            </div>
        </>
    )
}
