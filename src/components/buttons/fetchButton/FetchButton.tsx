import './FetchButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../../state'
import { createQuery } from '../../../state/actionCreators'

export const FetchButton = () => {
    const queryValue: string = useSelector((state: State) => state.searchQuery)
    let queryPath = queryValue
    queryPath = queryPath.replace(/\s+/g, '+')
    // console.log(queryPath)
    const queryValueLength: number = queryValue.length

    const SetInitialResultsTitle = () => {
        createQuery(queryPath)
        console.log('FETCH BUTTON - SetStateTitle wrote this')
        document.title = `${queryPath} - Google`
    }

    return (
        <>
            {queryValueLength === 0 ? (
                <Button className="button-style" node="button">
                    <span>Google Search</span>
                </Button>
            ) : (
                // <Link
                //     to={{
                //         pathname: '/search',
                //         search: '?q=' + queryPath,
                //     }}
                //     onClick={SetInitialResultsTitle}
                // >
                //     <Button className="fetch-button-style" node="button">
                //         <span>Google Search</span>
                //     </Button>
                // </Link>

                <Link
                    to={{
                        pathname: '/search',
                        search: '?q=' + queryPath,
                    }}
                    // onClick={SetInitialResultsTitle}
                >
                    <Button className="fetch-button-style" node="button">
                        <span>Google Search</span>
                    </Button>
                </Link>
            )}
        </>
    )
}
