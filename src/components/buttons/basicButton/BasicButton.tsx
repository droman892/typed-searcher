import './BasicButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

export const BasicButton = () => {
    return (
        <Link to="/search/*">
            <Button className="button-style" node="button">
                <span>I&#39;m Feeling Lucky</span>
            </Button>
        </Link>
    )
}
