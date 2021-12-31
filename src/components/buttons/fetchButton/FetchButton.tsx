import './FetchButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const FetchButton = () => {
    const searchQuery: string = useSelector((state) => state.searchQuery)

    const searchQueryLength: number = searchQuery.length

    // console.log(searchQueryLength)

    return (
        <>
            {searchQueryLength === 0 ? (
                <Button id="button-style" node="button" type="submit">
                    <span>Google Search</span>
                </Button>
            ) : (
                <Link to="/results">
                    <Button id="button-style" node="button" type="submit">
                        <span>Google Search</span>
                    </Button>
                </Link>
            )}
        </>
    )
}
