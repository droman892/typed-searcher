import { ResultsNavigation } from '../components/layout/resultsNavigation/ResultsNavigation'
import { ResultsFooter } from '../components/layout/resultsFooter/ResultsFooter'

export const Results = () => {
    return (
        <div className="page-flexbox-wrapper">
            <ResultsNavigation />
            <main>
                <h1>This is the Results page.</h1>
                <p>
                    Use the UseEffect Hook to display the fetched info on screen
                    load
                </p>
            </main>
            <ResultsFooter />
        </div>
    )
}
