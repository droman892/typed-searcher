import './LayoutFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Footer } from 'react-materialize'

export const LayoutFooter = () => {
    return (
        <footer>
            <Footer
                className="footer-container"
                link={<p>wow</p>}
                moreLinks={
                    <a className="footer-text right" href="#!">
                        Carbon neutral since 2007
                    </a>
                }
            ></Footer>
        </footer>
    )
}
