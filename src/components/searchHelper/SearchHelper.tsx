import { Link } from 'react-router-dom'
import { BasicButton } from '../buttons/basicButton/BasicButton'
import { FetchButton } from '../buttons/fetchButton/FetchButton'
import './SearchHelper.scss'
import { v4 as uuidv4 } from 'uuid'

export const SearchHelper = () => {
    const unique_id = uuidv4()
    // const queryValue: string = useSelector((state: State) => state.searchQuery)

    // const queryValueLength: number = queryValue.length

    // console.log('Query Length: ' + queryValueLength)

    return (
        <div className="search-helper" id="search-helper">
            <div className="search-helper-2">
                <div className="helper-space"></div>
                <div className="search-helper-3">
                    {/* <Link to="/results"> */}
                        <ul className="helper-list-container">
                            <div id="search-results"></div>
                        </ul>
                    {/* </Link> */}
                </div>
                <div className="helper-space-bottom"></div>
                <div className="search-helper-button-container">
                    <div className="search-helper-button-container-2">
                        <FetchButton />
                        <BasicButton />
                    </div>
                </div>
            </div>
            <div className="search-helper-text">
                <a className="helper-link" href="#!">
                    Report inappropriate predictions
                </a>
            </div>
        </div>
    )
}
