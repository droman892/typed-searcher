import './ResultsContainer.scss'
import '../../styles/_index.scss'
import { Query } from '../../api/Query'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ResultsPreloader } from '../../components/preloader/ResultsPreloader'
import { ResultsDataContainer } from '../resultsDataContainer/ResultsDataContainer'
import { ResultsHelperListItems } from '../../components/keywords/ResultsHelperListItems'

export const ResultsContainer = () => {
    let searchQuery: string = useSelector((state) => state.searchQuery)
    searchQuery = searchQuery.replace(/\s+/g, '+')

    const [resultsResponseData, setResultsResponseData] = useState('')

    const [loading, setLoading] = useState(false)

    const [stats, setStats] = useState('')

    const count = stats.total || '...'
    const resultsCount = count.toLocaleString()

    const timing = stats.ts || 0
    const resultsTiming = timing.toFixed(2)

    const queryString = window.location.search
    // console.log('QUERY STRING: ' + queryString)
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
    //         })
    //         .catch(function (error) {
    //             console.error(error)
    //         })
    // }, [])

    return (
        <>
            {resultsResponseData.length > 1 ? (
                <div className="stats-bar">
                    <div>
                        <div className="stats-relative-0">
                            <div className="stats-relative-1">
                                <div className="stats-relative-2">
                                    <div className="stats-relative-3">
                                        About <span id="results-total" />
                                        {resultsCount} results&nbsp;
                                        <span>
                                            (<span id="results-ts"></span>
                                            {resultsTiming} seconds)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <ResultsPreloader />
            )}

            {resultsResponseData[0] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[0].link}
                    head={resultsResponseData[0].title}
                    desc={resultsResponseData[0].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[1] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[1].link}
                    head={resultsResponseData[1].title}
                    desc={resultsResponseData[1].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[2] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[2].link}
                    head={resultsResponseData[2].title}
                    desc={resultsResponseData[2].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[3] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[3].link}
                    head={resultsResponseData[3].title}
                    desc={resultsResponseData[3].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[4] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[4].link}
                    head={resultsResponseData[4].title}
                    desc={resultsResponseData[4].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[5] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[5].link}
                    head={resultsResponseData[5].title}
                    desc={resultsResponseData[5].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[6] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[6].link}
                    head={resultsResponseData[6].title}
                    desc={resultsResponseData[6].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[7] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[7].link}
                    head={resultsResponseData[7].title}
                    desc={resultsResponseData[7].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[8] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[8].link}
                    head={resultsResponseData[8].title}
                    desc={resultsResponseData[8].description}
                />
            ) : (
                ''
            )}

            {resultsResponseData[9] ? (
                <ResultsHelperListItems
                    urlPath={resultsResponseData[9].link}
                    head={resultsResponseData[9].title}
                    desc={resultsResponseData[9].description}
                />
            ) : (
                ''
            )}

            <ResultsPreloader />
        </>
    )
}
