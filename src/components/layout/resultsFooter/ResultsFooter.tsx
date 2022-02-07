import './ResultsFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Footer } from 'react-materialize'

export const ResultsFooter = () => {
    return (
        <footer className="results-page-footer">
            <span className="results-footer-span">
                <span className="results-footer-span-2">
                    <a href="/#" className="results-footer">
                        Help
                    </a>
                    <a href="/#" className="results-footer results-footer-link">
                        Send feedback
                    </a>
                    <a href="/#" className="results-footer results-footer-link">
                        Privacy
                    </a>
                    <a href="/#" className="results-footer results-footer-link">
                        Terms
                    </a>
                </span>
            </span>
        </footer>

        // <Footer
        //     className="results-page-footer"
        //     moreLinks={
        //         <>
        //             <span className="left left-footer-container">
        //                 <a href="/#" className="footer-link">
        //                     Help
        //                 </a>
        //                 <a href="/#" className="footer-link">
        //                     Send feedback
        //                 </a>
        //                 <a href="/#" className="footer-link">
        //                     Privacy
        //                 </a>
        //                 <a href="/#" className="footer-link">
        //                     Terms
        //                 </a>
        //             </span>
        //         </>
        //     }
        // ></Footer>

        // <Footer
        //     className="example"
        //     copyrights="&copy 2015 Copyright Text"
        //     links={
        //         <ul>
        //             <li>
        //                 <a className="grey-text text-lighten-3" href="#!">
        //                     Link 1
        //                 </a>
        //             </li>
        //             <li>
        //                 <a className="grey-text text-lighten-3" href="#!">
        //                     Link 2
        //                 </a>
        //             </li>
        //             <li>
        //                 <a className="grey-text text-lighten-3" href="#!">
        //                     Link 3
        //                 </a>
        //             </li>
        //             <li>
        //                 <a className="grey-text text-lighten-3" href="#!">
        //                     Link 4
        //                 </a>
        //             </li>
        //         </ul>
        //     }
        //     moreLinks={
        //         <a className="grey-text text-lighten-4 right" href="#!">
        //             More Links
        //         </a>
        //     }
        // >
        //     <h5 className="white-text">Footer Content</h5>
        //     <p className="grey-text text-lighten-4">
        //         You can use rows and columns here to organize your footer
        //         content.
        //     </p>
        // </Footer>
    )
}
