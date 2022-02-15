import { DefaultResultsLayout } from '../components/layout/DefaultResultsLayout'
import '../styles/styles.scss'
import '../containers/resultsContainer/ResultsContainer.scss'
import { ResultsContainer } from '../containers/resultsContainer/ResultsContainer'
import { MobileResultsData } from '../components/keywords/MobileResultsData'
import { MobileResultsPreloader } from '../components/preloader/mobileResultsPreloader/MobileResultsPreloader'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export const Results = () => {


    const [resultsResponseData, setResultsResponseData] = useState([])

    // const [elmo, setElmo] = useState([9, 4, 3])
    // console.log(elmo)

    const [pageFreshness, setPageFreshness] = useState(false)

    const queryString = window.location.search

    const urlParams = new URLSearchParams(queryString)
    const queryMade = urlParams.get('q') || ''

    console.log(queryMade)

    const [stats, setStats] = useState('')

    const count = stats.total || '...'
    const resultsCount = count.toLocaleString()

    const timing = stats.ts || 0
    const resultsTiming = timing.toFixed(2)

    const keywordAPIKey = process.env.REACT_APP_API_KEY

    // const [currentURL, setCurrentURL] = useState(queryMade)
    // console.log('CURRENT URL: ' + currentURL)

    // const handleURL = () => {
    //     console.log('URL CHANGED')
    //     setCurrentURL(queryMade)
    // }

    // useEffect(() => {
    //     console.log('success')
    //     window.addEventListener('url', handleURL)

    //     return () => {
    //         console.log('okerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
    //     }

    // }, [handleURL, queryMade])

    // useEffect(() => {
    //     return history.listen((window.location) => {
    //         console.log(`You changed the page to: ${location.pathname}`)
    //     })
    // }, [history])

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

    //             if (response.data !== undefined) {
    //                 const resultsStatsArray = response.data
    //                 // console.log(resultsStatsArray)

    //                 setStats(resultsStatsArray)
    //             }

    //             if (response.data.results !== undefined) {
    //                 const resultsDataArray = response.data.results
    //                 console.log(resultsDataArray)
    //                 setResultsResponseData(resultsDataArray)
    //             }

    //             console.log('QUERY MADE')
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
                        <h1>DAVID ROMAN</h1>
                        {/* {currentURL} */}
                        <ResultsContainer
                            resultsData="GREAT"
                            resultsLength={resultsResponseData.length || 0}
                            resultsCount={resultsCount}
                            resultsTiming={resultsTiming}
                            res0={resultsResponseData[0] || ''}
                            link0={resultsResponseData[0]?.link || ''}
                            title0={resultsResponseData[0]?.title || ''}
                            desc0={resultsResponseData[0]?.description || ''}
                            res1={resultsResponseData[1] || ''}
                            link1={resultsResponseData[1]?.link || ''}
                            title1={resultsResponseData[1]?.title || ''}
                            desc1={resultsResponseData[1]?.description || ''}
                            res2={resultsResponseData[2] || ''}
                            link2={resultsResponseData[2]?.link || ''}
                            title2={resultsResponseData[2]?.title || ''}
                            desc2={resultsResponseData[2]?.description || ''}
                            res3={resultsResponseData[3] || ''}
                            link3={resultsResponseData[1]?.link || ''}
                            title3={resultsResponseData[3]?.title || ''}
                            desc3={resultsResponseData[3]?.description || ''}
                            res4={resultsResponseData[4] || ''}
                            link4={resultsResponseData[4]?.link || ''}
                            title4={resultsResponseData[4]?.title || ''}
                            desc4={resultsResponseData[4]?.description || ''}
                            res5={resultsResponseData[5] || ''}
                            link5={resultsResponseData[5]?.link || ''}
                            title5={resultsResponseData[5]?.title || ''}
                            desc5={resultsResponseData[5]?.description || ''}
                            res6={resultsResponseData[6] || ''}
                            link6={resultsResponseData[6]?.link || ''}
                            title6={resultsResponseData[6]?.title || ''}
                            desc6={resultsResponseData[6]?.description || ''}
                            res7={resultsResponseData[7] || ''}
                            link7={resultsResponseData[7]?.link || ''}
                            title7={resultsResponseData[7]?.title || ''}
                            desc7={resultsResponseData[7]?.description || ''}
                            res8={resultsResponseData[8] || ''}
                            link8={resultsResponseData[8]?.link || ''}
                            title8={resultsResponseData[8]?.title || ''}
                            desc8={resultsResponseData[8]?.description || ''}
                            res9={resultsResponseData[9] || ''}
                            link9={resultsResponseData[9]?.link || ''}
                            title9={resultsResponseData[9]?.title || ''}
                            desc9={resultsResponseData[9]?.description || ''}
                        />
                    </div>
                </div>
                <div className="results-mobile-container">
                    <div className="mobile-res-container">
                        {resultsResponseData.map((result) => (
                            <MobileResultsData
                                key={uuidv4()}
                                urlPath={result.link}
                                head={result.title}
                                desc={result.description}
                            />
                        ))}
                    </div>

                    {resultsResponseData.length == 0 ? (
                        <MobileResultsPreloader />
                    ) : (
                        ''
                    )}

                    {/* <h1>MORNING</h1>
                    <h1>MORNING</h1>
                    <h1>MORNING</h1>
                    <h1>MORNING</h1>
                    <h1>MORNING</h1>
                    <h1>MORNING</h1>
                    <h1>MORNING</h1>
                    <h1>MORNING</h1> */}

                    {/* <>
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
                    </> */}
                </div>
            </main>
        </DefaultResultsLayout>
    )
}
