import './FetchButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

export const FetchButton = () => {
    return (
        <Link to="/results">
            <Button className="button-style" node="button" type="submit">
                <span>Google Search</span>
            </Button>
        </Link>
    )
}
