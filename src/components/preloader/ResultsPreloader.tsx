import './ResultsPreloader.scss'
import '../../styles/_index.scss'
import { Preloader } from 'react-materialize'

export const ResultsPreloader = () => {
    const sorryNotice = () => {
        console.log('AW SNAP')
    }
    setTimeout(sorryNotice, 3000)

    return (
        <>
            {/* <Preloader
                active
                color="green"
                flashing={false}
                size="big"
                className="preloader-container-1"
            /> */}

            <div className="notice-container">
            <div className="notice">
                <h4>Oops! - 500: Internal Server Error</h4>
                <h5 className="explanation">Looks like something happened with the server...</h5>
                <br></br>
                <h5 className="troubleshoot">Recommended Troubleshooting:</h5>
                <h5>- Refresh the page</h5>
                <h5>- Try again later</h5>
                <h5>
                    - Contact our{' '}
                    <a
                        href="https://www.linkedin.com/in/david-roman-front-end-engineer/"
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
