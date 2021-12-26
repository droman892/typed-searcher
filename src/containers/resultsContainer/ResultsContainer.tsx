import './ResultsContainer.scss'
import '../../styles/_index.scss'
// import { Query } from '../../api/Query'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { ResultsPreloader } from '../../components/preloader/ResultsPreloader'

export const ResultsContainer = () => {
    let searchQuery: string = useSelector((state) => state.searchQuery)
    searchQuery = searchQuery.replace(/\s+/g, '+')

    const [loading, setLoading] = useState(false)

    const queryData: object = {
        method: 'GET',
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchQuery}&num=100`,
        headers: {
            'x-user-agent': 'desktop',
            'x-proxy-location': 'US',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key':
                '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
        },
    }

    useEffect(() => {
        const axiosFunction = async () => {
            axios
                .request(queryData)
                .then(function (response) {
                    console.log(response.data.results)
                    const dataResults = document.getElementById('queriedData')

                    let dataResultsList = ''

                    for (let i = 0; i < response.data.results.length; i++) {
                        dataResultsList += `<div id="axios-data-1">
                            <div id="axios-data-2">
                                <div id="axios-data-3">
                                    <div className="axios-data-4">
                                        <a 
                                            href="${response.data.results[i].link}" 
                                            target="_blank"
                                        >
                                            <p id="data-link">
                                                ${response.data.results[i].link}
                                            </p>
                                            <h3 id="data-title">
                                                ${response.data.results[i].title}
                                            </h3>
                                        </a>
                                    </div>
                                    <div id="axios-data-5">
                                        <p id="description">
                                            ${response.data.results[i].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>`

                        dataResults.innerHTML = dataResultsList
                    }
                    setLoading(true)
                })
                .catch(function (error) {
                    console.error(error)
                })
        }

        axiosFunction()
    }, [])

    return (
        <>
            <div className="data-container">
                <div className="data-container-2">
                    <div className="data-container-3">
                        <div id="queriedData"></div>
                    </div>
                </div>
            </div>

            {loading ? <div id="queriedData"></div> : <ResultsPreloader />}
        </>
    )
}
