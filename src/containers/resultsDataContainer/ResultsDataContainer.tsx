import './ResultsDataContainer.scss'
import '../../styles/_index.scss'

export const ResultsDataContainer = () => {
    return (
        <>
            <div className="stats-bar">
                <div>
                    <div className="stats-relative-0">
                        <div className="stats-relative-1">
                            <div className="stats-relative-2">
                                <div className="stats-relative-3">
                                    About <span id="results-total" />{' '}
                                    results&nbsp;
                                    <span>
                                        (<span id="results-ts"></span> seconds)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="data-container">
                <div className="data-container-2">
                    <div className="data-container-3">
                        <div id="queriedData"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
