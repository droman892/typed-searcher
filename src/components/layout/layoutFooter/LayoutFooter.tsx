import './LayoutFooter.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Footer } from 'react-materialize'

export const LayoutFooter = () => {
    return (
        <footer>
            <Footer
                link={<p>wow</p>}
                copyrights="Carbon neutral since 2007"
                moreLinks={
                    <a className="grey-text text-lighten-4 right" href="#!">
                        Carbon neutral since 2007
                    </a>
                }
            ></Footer>
        </footer>
    )
}
