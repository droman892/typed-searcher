import { ResultsNavigation } from '../components/layout/resultsNavigation/ResultsNavigation'
import { ResultsFooter } from '../components/layout/resultsFooter/ResultsFooter'
// import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'

export const Results = () => {
    return (
        <div className="page-flexbox-wrapper">
            <ResultsNavigation />
            <main>
                <h1>This is the Results page.</h1>
                {/* <ResultsContainer /> */}
            </main>
            <ResultsFooter />
        </div>
    )
}
