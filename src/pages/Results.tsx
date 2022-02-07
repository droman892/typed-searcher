import { DefaultResultsLayout } from '../components/layout/DefaultResultsLayout'
import '../styles/styles.scss'
import '../containers/resultsContainer/ResultsContainer.scss'
import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'

export const Results = () => {
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
