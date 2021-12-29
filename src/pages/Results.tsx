import { ResultsNavigation } from '../components/layout/resultsNavigation/ResultsNavigation'
import { ResultsNavigation2 } from '../components/layout/resultsNavigation2/ResultsNavigation2'
import { ResultsFooter } from '../components/layout/resultsFooter/ResultsFooter'
// import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'

export const Results = () => {
    return (
        <div className="page-flexbox-wrapper">
            <ResultsNavigation />
            <ResultsNavigation2 />
            <main className="results-page-container-1">
                <div className="results-page-container-2">
                    <div className="results-page-container-3">
                        <h1>This is the Results page 1.</h1>
                        <h1>This is the Results page 2.</h1>
                        <h1>This is the Results page 3.</h1>
                        <h1>This is the Results page 4.</h1>
                        <h1>This is the Results page 5.</h1>
                        <h1>This is the Results page.</h1>
                        <h1>This is the Results page.</h1>
                        <h1>This is the Results page.</h1>
                        <h1>This is the Results page.</h1>
                        <h1>This is the Results page.</h1>

                        {/* <ResultsContainer /> */}
                    </div>
                </div>
            </main>
            <ResultsFooter />
        </div>
    )
}
