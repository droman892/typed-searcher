import './BasicButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'

export const BasicButton = () => {
    return (
        <Button
            node="button"
            style={{
                marginRight: '5px',
            }}
            waves="light"
        >
            I am Feeling Lucky
        </Button>
    )
}
