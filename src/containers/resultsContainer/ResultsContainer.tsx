import './ResultsContainer.scss'
import '../../styles/_index.scss'
// import { Query } from '../../api/Query'
// import { useState, useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { ResultsPreloader } from '../../components/preloader/ResultsPreloader'
// import { ResultsDataContainer } from '../resultsDataContainer/ResultsDataContainer'

export const ResultsContainer = () => {
    // let searchQuery: string = useSelector((state) => state.searchQuery)
    // searchQuery = searchQuery.replace(/\s+/g, '+')

    // const [loading, setLoading] = useState(false)

    // const queryData: object = {
    //     method: 'GET',
    //     url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchQuery}&num=100`,
    //     headers: {
    //         'x-user-agent': 'desktop',
    //         'x-proxy-location': 'US',
    //         'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    //         'x-rapidapi-key':
    //             '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
    //     },
    // }

    // useEffect(() => {
    //     const axiosFunction = async () => {
    //         axios
    //             .request(queryData)
    //             .then(function (response) {
    //                 console.log(response)
    //                 console.log(response.data)
    //                 console.log(response.data.results)
    //                 console.log(response.data.total)
    //                 console.log(response.data.ts)

    //                 const resultsCount = (x) => {
    //                     return x
    //                         .toString()
    //                         .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    //                 }

    //                 const resultsTotal = document.getElementById('results-total')

    //                 const apiCount = response.data.total

    //                 const finalNum = resultsCount(apiCount)

    //                 const resultsAPITotal = `${finalNum}`

    //                 resultsTotal.innerHTML = resultsAPITotal

    //                 const resultsTS = document.getElementById('results-ts')

    //                 const apiTime = response.data.ts

    //                 const finalTime = apiTime.toFixed(2)

    //                 const resultsAPITS = `${finalTime}`

    //                 resultsTS.innerHTML = resultsAPITS

    //                 const dataResults = document.getElementById('queriedData')

    //                 let dataResultsList = ''

    //                 for (let i = 0; i < response.data.results.length; i++) {
    //                     dataResultsList += `<div id="axios-data-1">
    //                             <div id="axios-data-2">
    //                                 <div id="axios-data-3">
    //                                     <div className="axios-data-4">
    //                                         <a
    //                                             href="${response.data.results[i].link}"
    //                                             target="_blank"
    //                                         >
    //                                             <p id="data-link">
    //                                                 ${response.data.results[i].link}
    //                                             </p>
    //                                             <h3 id="data-title">
    //                                                 ${response.data.results[i].title}
    //                                             </h3>
    //                                         </a>
    //                                     </div>
    //                                     <div id="axios-data-5">
    //                                         <p id="description">
    //                                             ${response.data.results[i].description}
    //                                         </p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>`

    //                     dataResults.innerHTML = dataResultsList
    //                 }
    //                 setLoading(true)
    //             })
    //             .catch(function (error) {
    //                 console.error(error)
    //             })
    //     }

    //     axiosFunction()
    // }, [])

    return (
        <>
            {/* <div className="stats-bar">
                <div>
                    <div className="stats-relative-0">
                        <div className="stats-relative-1">
                            <div className="stats-relative-2">
                                <div className="stats-relative-3">
                                    About <span id="results-total" />{' '}
                                    results&nbsp;
                                    <span>
                                        (<span id="results-ts"></span> seconds)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="data-container">
                <div className="data-container-2">
                    <div className="data-container-3">
                        <div id="queriedData"></div>
                    </div>
                </div>
            </div> */}

            {/* {loading ? <div id="queriedData"></div> : <ResultsPreloader />} */}

            {/* <ResultsDataContainer /> perhaps you can make this particular component invisible */}

            {/* {loading ? <ResultsDataContainer /> : <ResultsPreloader />} */}

            {/* {loading ? <ResultsDataContainer /> : 
            <>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            <h1>This is just a placeholder</h1>
            </>
            
            } */}

            {/* <ResultsDataContainer /> */}
            {/* <ResultsPreloader /> */}

            {/* <div className="test-container"></div> */}
        </>
    )
}
