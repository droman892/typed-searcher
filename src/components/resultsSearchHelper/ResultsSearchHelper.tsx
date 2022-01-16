import { BasicButton } from '../buttons/basicButton/BasicButton'
import { FetchButton } from '../buttons/fetchButton/FetchButton'
import './ResultsSearchHelper.scss'
import { HelperListItems } from '../keywords/HelperListItems'

export const ResultsSearchHelper = () => {
    return (
        <div className="results-search-helper" id="results-search-helper">
            <div className="results-search-helper-2">
                <div className="results-results-helper-space"></div>
                <div className="results-search-helper-3">
                    <ul className="results-helper-list-container">
                        <HelperListItems />
                    </ul>
                </div>
                <div className="results-helper-space-bottom"></div>
                <div className="results-search-helper-button-container">
                    <div className="results-search-helper-button-container-2">
                        <FetchButton />
                        <BasicButton />
                    </div>
                </div>
            </div>
            <div className="results-search-helper-text">
                <a className="results-helper-link" href="#!">
                    Report inappropriate predictions
                </a>
            </div>
        </div>
    )
}
