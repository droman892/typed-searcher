import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'

export const HelperListItems = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length
    const searchResults = document.getElementById('search-results')
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    return useEffect(() => {
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
                console.log(response.data.googleGuggestedKeywords)

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

                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        searchResults!.innerHTML = keyword_list
                    }
                }
                for (
                    let i = 0;
                    i < response.data.googleGuggestedKeywords.length;
                    i++
                ) {
                    const mainSpan = document.getElementById('item-span')
                    const textSpan = mainSpan?.innerText
                    console.log(textSpan)
                    mainSpan?.addEventListener('click', function () {
                        console.log('this item was clicked!!!!')
                    })
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    })
}
