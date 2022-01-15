import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'
import { Link } from 'react-router-dom'

export const HelperListItems = () => {
    // const unique_id = uuidv4()
    // console.log(unique_id)
    const queryValue = useSelector((state: State) => state.searchQuery)
    // const queryValueLength: number = queryValue.length
    // const searchResults = document.getElementById('search-results')
    const dispatch = useDispatch()
    // const { createQuery } = bindActionCreators(actionCreators, dispatch)
    const [responseData, setResponseData] = useState('')

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://keywords4.p.rapidapi.com/google-topLevel-10-keywords',
            params: { search: queryValue, country: 'us' },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'keywords4.p.rapidapi.com',
                'x-rapidapi-key':
                    '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
            },
        }

        axios
            .request(options)
            .then(function (response) {
                if (response.data.googleGuggestedKeywords == undefined) {
                    console.log(`MESSAGE: The ${response.data}.`)
                } else {
                    console.log('MESSAGE: Something has been typed.')
                    const keywordArray = response.data.googleGuggestedKeywords

                    setResponseData(keywordArray)
                }

                // console.log(response.data.googleGuggestedKeywords)

                // setResponseData(response.data.googleGuggestedKeywords || '')
            })
            .catch(function (error) {
                console.error(error)
            })
    }, [queryValue])

    return (
        <>
            <Link
                to={{
                    pathname: '/search',
                    search: '?q=' + responseData[0],
                }}
            >
                <li id="helper-list-item">
                    <div id="item-container">
                        <div id="item-icon"></div>
                        <div id="item-name">
                            <div id="item-name-2">
                                <span id="item-span">{responseData[0]}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>
            <Link
                to={{
                    pathname: '/search',
                    search: '?q=' + responseData[2],
                }}
            >
                <li id="helper-list-item">
                    <div id="item-container">
                        <div id="item-icon"></div>
                        <div id="item-name">
                            <div id="item-name-2">
                                <span id="item-span">{responseData[2]}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>
        </>
    )
}
