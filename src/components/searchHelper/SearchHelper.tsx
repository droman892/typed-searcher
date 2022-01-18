import { BasicButton } from '../buttons/basicButton/BasicButton'
import { FetchButton } from '../buttons/fetchButton/FetchButton'
import './SearchHelper.scss'
import { HelperListItems } from '../keywords/HelperListItems'

export const SearchHelper = () => {
    return (
        <div className="search-helper" id="search-helper">
            <div className="search-helper-2">
                <div className="helper-space"></div>
                <div className="search-helper-3">
                    <ul className="helper-list-container">
                        <HelperListItems />
                    </ul>
                </div>
                <div className="helper-space-bottom" id="helper-space-bottom"></div>
                <div className="search-helper-button-container">
                    <div className="search-helper-button-container-2" id="double-button">
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
