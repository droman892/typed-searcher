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

    const [stats, setStats] = useState('')
    console.log(stats)

    const [loading, setLoading] = useState(false)

    const count = stats.total
    console.log(count)
    // const resultCount = count.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    // console.log(resultCount)

    // const timing = stats.ts
    // console.log(timing)
    // const resultTiming = timing.toFixed(2)
    // console.log(resultTiming)





    // const count = 10000000000
    // console.log(count)
    // const resultCount = count
    //     .toString()
    //     .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    // console.log(resultCount)

    // const timing = 34.233432423434
    // console.log(timing)
    // const resultTiming = timing.toFixed(2)
    // console.log(resultTiming)






    // useEffect(() => {
    //     console.log('API MAGIC')

    //     const options = {
    //         method: 'GET',
    //         url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=${searchQuery}&num=10',
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
    //             console.log(response.data)
    //             console.log(response.data.results)

    //              if (response.data !== undefined) {
    //                 const resultsStatsArray = response.data


    //                 setStats(resultsStatsArray)
    //             }

    //             if (response.data.results !== undefined) {
    //                 const resultsDataArray = response.data.results
    //                 setResultsResponseData(resultsDataArray)
    //             }
    //         })
    //         .catch(function (error) {
    //             console.error(error)
    //         })
    // }, [])
    // console.log(stats)
    // console.log(resultsResponseData)

    // console.log(stats.total)
    // console.log(stats.ts)




    // const linkData = {resultsResponseData[0].link}
    // const titleData = {resultsResponseData[0].title}
    // const descData = {resultsResponseData[0].description}

    // console.log(resultsResponseData[0].link)
    // console.log(resultsResponseData[0].title)
    // console.log(resultsResponseData[0].description)

    // console.log(resultsResponseData[0])
    // console.log(resultsResponseData[0].link)
    // console.log(resultsResponseData[0].title)
    // console.log(resultsResponseData[0].description)

    return (
        <>
            <div className="stats-bar">
                <div>
                    <div className="stats-relative-0">
                        <div className="stats-relative-1">
                            <div className="stats-relative-2">
                                <div className="stats-relative-3">
                                    About <span id="results-total" />
                                    {stats.total}
                                    results&nbsp;
                                    <span>
                                        (<span id="results-ts"></span>
                                        {stats.ts} seconds)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ResultsHelperListItems
                urlPath={resultsResponseData[0].link}
                head={resultsResponseData[0].title}
                desc={resultsResponseData[0].description}
            /> */}

            {/* <ResultsHelperListItems
                urlPath={resultsResponseData[1].link}
                head={resultsResponseData[1].title}
                desc={resultsResponseData[1].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[2].link}
                head={resultsResponseData[2].title}
                desc={resultsResponseData[2].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[3].link}
                head={resultsResponseData[3].title}
                desc={resultsResponseData[3].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[4].link}
                head={resultsResponseData[4].title}
                desc={resultsResponseData[4].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[5].link}
                head={resultsResponseData[5].title}
                desc={resultsResponseData[5].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[6].link}
                head={resultsResponseData[6].title}
                desc={resultsResponseData[6].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[7].link}
                head={resultsResponseData[7].title}
                desc={resultsResponseData[7].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[8].link}
                head={resultsResponseData[8].title}
                desc={resultsResponseData[8].description}
            />

            <ResultsHelperListItems
                urlPath={resultsResponseData[9].link}
                head={resultsResponseData[9].title}
                desc={resultsResponseData[9].description}
            /> */}

            {/* <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            /> */}

            {/* <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            />
            <ResultsHelperListItems
                urlPath="https://www.searchEngineProjectDR.tech"
                head="Official Search Engine Project (DR) Test Component"
                desc="This is simply a description of this component used to test if the actual API information fetched through Axios will be presented how I want it do."
            /> */}
        </>
    )
}
