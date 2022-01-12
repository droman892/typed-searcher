import './Searcher.scss'
import '../../../src/styles/_index.scss'
import 'materialize-css'
import { TextInput } from 'react-materialize'
import magnifyingGlass from '../../assets/images/magnifyingGlass.png'
import microphone from '../../assets/images/microphone.png'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../state/index'
import { useEffect } from 'react'
import axios from 'axios'
import { SearchHelper } from '../searchHelper/SearchHelper'
import '../searchHelper/SearchHelper.scss'

export const Searcher = () => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length
    const searchResults = document.getElementById('search-results')
    const displayTrends = () => {
        if (queryValueLength === 0) {
            console.log('The input box has been clicked')
        } else {
            // console.log('Excellent')
            document
                .getElementById('search-engine')
                ?.classList.toggle('search-engine-2')
            document
                .getElementById('helper-container')
                ?.classList.toggle('helper-container-2')
        }
    }

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
                // console.log(response.data.googleGuggestedKeywords.length)
                let keyword_list = ''

                if (queryValueLength === 0) {
                    console.log('NO query has been made')
                } else {
                    console.log('A query HAS been made')
                    for (
                        let i = 0;
                        i < response.data.googleGuggestedKeywords.length;
                        i++
                    ) {
                        // eslint-disable-next-line prettier/prettier
                    keyword_list += 
                    `<li id="helper-list-item">
                        <div id="item-container">
                            <div id="item-icon"></div>
                            <div id="item-name">
                                <div id="item-name-2">
                                    <span id="item-span">
                                        ${response.data.googleGuggestedKeywords[i]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>`
                        searchResults.innerHTML = keyword_list
                    }
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    })

    // window.onclick = function (event) {
    //     if (!event.target.matches('.helper-container-2')) {
    //         const dropdowns =
    //             document.getElementsByClassName('.helper-container')
    //         let i
    //         for (i = 0; i < dropdowns.length; i++) {
    //             const openDropdown = dropdowns[i]
    //             if (openDropdown.classList.contains('helper-container-2')) {
    //                 openDropdown.classList.remove('helper-container-2')
    //             }
    //         }
    //     }
    // }

    return (
        <>
            <div className="search-engine" id="search-engine">
                <div className="search-engine-inner">
                    <div className="magnifying-glass-container">
                        <div className="magnifying-glass-container-2">
                            <span className="glass-icon-container">
                                <img
                                    src={magnifyingGlass}
                                    alt="Magnifying Glass"
                                    className="glass-image"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="input-container">
                        <TextInput
                            id="query"
                            inputClassName="search-input"
                            autoFocus
                            onChange={(e) => createQuery(e.target.value)}
                            onClick={displayTrends}
                            maxLength="2048"
                            autoComplete="off"
                        />
                    </div>
                    <div className="microphone-container">
                        <div className="microphone-container-2">
                            <img
                                src={microphone}
                                alt="Microphone"
                                className="microphone"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="helper-container" id="helper-container">
                <SearchHelper />
            </div>
        </>
    )
}
