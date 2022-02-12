import './ResultsSearchHelper.scss'
import { HelperListItems } from '../keywords/HelperListItems'

export const ResultsSearchHelper = () => {
    return (
        <div className="results-search-helper" id="results-search-helper">
            <div className="results-search-helper-2">
                <div className="results-helper-space"></div>
                <div className="results-search-helper-3">
                    <ul className="results-helper-list-container">
                        <div className="results-helper-list-container-2">
                            <ul
                                className="results-helper-list-container-3"
                                id="items-list"
                            >
                                <HelperListItems />
                            </ul>
                        </div>
                    </ul>
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
