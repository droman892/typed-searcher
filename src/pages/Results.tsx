import { DefaultResultsLayout } from '../components/layout/DefaultResultsLayout'
import '../styles/styles.scss'
import '../containers/resultsContainer/ResultsContainer.scss'
import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'
import { MobileResultsData } from '../components/keywords/MobileResultsData'
import { MobileResultsPreloader } from '../components/preloader/mobileResultsPreloader/MobileResultsPreloader'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Results = () => {
    const [resultsResponseData, setResultsResponseData] = useState('')

    const queryString = window.location.search

    const urlParams = new URLSearchParams(queryString)
    const queryMade = urlParams.get('q') || ''

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${queryMade}&num=10`,
    //         headers: {
    //             'x-user-agent': 'desktop',
    //             'x-proxy-location': 'EU',
    //             'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    //             'x-rapidapi-key':
    //                 '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
    //         },
    //     }

    //     axios
    //         .request(options)
    //         .then(function (response) {
    //             // console.log(response.data)
    //             // console.log(response.data.results)

    //             if (response.data.results !== undefined) {
    //                 const resultsDataArray = response.data.results
    //                 console.log(resultsDataArray)
    //                 setResultsResponseData(resultsDataArray)
    //             }
    //         })
    //         .catch(function (error) {
    //             console.error(error)
    //         })
    // }, [queryMade])

    return (
        <DefaultResultsLayout>
            <main className="results-page-container-1">
                <div className="results-page-container-2">
                    <div className="results-page-container-3">
                        <ResultsContainer resultsData="RETURNED DATA" />
                    </div>
                </div>
                <div className="results-mobile-container">
                    {/* <p>this is for mobile data</p> */}

                    <>
                        {resultsResponseData[0] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[0].link}
                                head={resultsResponseData[0].title}
                                desc={resultsResponseData[0].description}
                            />
                        ) : (
                            <MobileResultsPreloader />
                        )}

                        {resultsResponseData[1] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[1].link}
                                head={resultsResponseData[1].title}
                                desc={resultsResponseData[1].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[2] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[2].link}
                                head={resultsResponseData[2].title}
                                desc={resultsResponseData[2].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[3] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[3].link}
                                head={resultsResponseData[3].title}
                                desc={resultsResponseData[3].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[4] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[4].link}
                                head={resultsResponseData[4].title}
                                desc={resultsResponseData[4].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[5] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[5].link}
                                head={resultsResponseData[5].title}
                                desc={resultsResponseData[5].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[6] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[6].link}
                                head={resultsResponseData[6].title}
                                desc={resultsResponseData[6].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[7] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[7].link}
                                head={resultsResponseData[7].title}
                                desc={resultsResponseData[7].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[8] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[8].link}
                                head={resultsResponseData[8].title}
                                desc={resultsResponseData[8].description}
                            />
                        ) : (
                            ''
                        )}

                        {resultsResponseData[9] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[9].link}
                                head={resultsResponseData[9].title}
                                desc={resultsResponseData[9].description}
                            />
                        ) : (
                            ''
                        )}
                    </>

                    {/* {resultsResponseData[0] ? (
                        <MobileResultsData
                            urlPath={resultsResponseData[0].link}
                            head={resultsResponseData[0].title}
                            desc={resultsResponseData[0].description}
                        />
                    ) : (
                        <MobileResultsPreloader />
                    )} */}

                    {/* <div className="test-container"> */}
                    {/* <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1>
                        <h1>MOBILE DATA</h1> */}

                    {/* {resultsResponseData[0] ? (
                            <MobileResultsData
                                urlPath={resultsResponseData[0].link}
                                head={resultsResponseData[0].title}
                                desc={resultsResponseData[0].description}
                            />
                        ) : (
                            <MobileResultsPreloader />
                        )} */}
                    {/* </div> */}
                </div>
            </main>
        </DefaultResultsLayout>
    )
}
