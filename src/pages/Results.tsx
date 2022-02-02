// import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { State } from '../state/index'
import { DefaultResultsLayout } from '../components/layout/DefaultResultsLayout'
import '../styles/styles.scss'
import '../containers/resultsContainer/ResultsContainer.scss'
import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'

export const Results = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)

    return (
        // <div className="page-flexbox-wrapper">
        //     <ResultsNavigation />
        //     <main className="results-page-container-1">
        //         <div className="results-page-container-2">
        //             <div className="results-page-container-3">
        //                 <ResultsContainer />
        //             </div>
        //         </div>
        //     </main>
        //     <ResultsFooter />
        // </div>

        <DefaultResultsLayout>
            <main className="results-page-container-1">
                <div className="results-page-container-2">
                    <div className="results-page-container-3">

                        

                        {/* <div className="stats-bar">
                            <div>
                                <div className="stats-relative-0">
                                    <div className="stats-relative-1">
                                        <div className="stats-relative-2">
                                            <div className="stats-relative-3">
                                                About{' '}
                                                <span id="results-total" />{' '}
                                                results&nbsp;
                                                <span>
                                                    (
                                                    <span id="results-ts"></span>{' '}
                                                    seconds)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <ResultsContainer />

                        {/* <div className="test-container"></div> */}



                    </div>
                </div>
            </main>
        </DefaultResultsLayout>
    )
}
