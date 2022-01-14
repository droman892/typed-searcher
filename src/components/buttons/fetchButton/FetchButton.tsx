import './FetchButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../../state'

export const FetchButton = () => {
    const queryValue: string = useSelector((state: State) => state.searchQuery)
    let queryPath = queryValue
    queryPath = queryPath.replace(/\s+/g, '+')
    // console.log(queryPath)
    const queryValueLength: number = queryValue.length

    return (
        <>
            {queryValueLength === 0 ? (
                <Button className="button-style" node="button">
                    <span>Google Search</span>
                </Button>
            ) : (
                // <Link to="/results?search=${queryValue}">
                <Link
                    to={{
                        pathname: '/search',
                        search: '?q=' + queryPath,
                    }}
                >
                    <Button className="fetch-button-style" node="button">
                        <span>Google Search</span>
                    </Button>
                </Link>
            )}
        </>
    )
}
