// import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'
import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
import { State } from '../state/index'
import { DefaultResultsLayout } from '../components/layout/DefaultResultsLayout'
import '../styles/styles.scss'
import '../containers/resultsContainer/ResultsContainer.scss'
import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'

export const Results = () => {
    // const queryValue = useSelector((state: State) => state.searchQuery)

    return (
        <DefaultResultsLayout>
            <main className="results-page-container-1">
                <div className="results-page-container-2">
                    <div className="results-page-container-3">
                        <ResultsContainer />
                    </div>
                </div>
            </main>
        </DefaultResultsLayout>
    )
}
