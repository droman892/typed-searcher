import { ResultsNavigation } from '../components/layout/resultsNavigation/ResultsNavigation'
import { ResultsNavigation2 } from '../components/layout/resultsNavigation2/ResultsNavigation2'
import { ResultsFooter } from '../components/layout/resultsFooter/ResultsFooter'
import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'
// import { useSelector, useDispatch } from 'react-redux'
// import { useState, useEffect } from 'react'

export const Results = () => {
    // const searchQuery = useSelector((state) => state.searchQuery)

    // useEffect(() => {
    //     document.title = `${searchQuery} - Google`
    // }, [])

    return (
        <div className="page-flexbox-wrapper">
            <ResultsNavigation />
            <ResultsNavigation2 />
            <main className="results-page-container-1">
                <div className="results-page-container-2">
                    <div className="results-page-container-3">
                        <ResultsContainer />
                    </div>
                </div>
            </main>
            <ResultsFooter />
        </div>
    )
}
