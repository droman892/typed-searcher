import './BasicButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'

export const BasicButton = () => {
    return (
        <Button className="button-style" node="button">
            <span>I&#39;m Feeling Lucky</span>
        </Button>
    )
}
