import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export const HelperListItems = () => {
    // const unique_id = uuidv4()
    // console.log(unique_id)
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length
    const searchResults = document.getElementById('search-results')
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

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
                        const unique_id = uuidv4()
                        let linkParameter: string = response.data.googleGuggestedKeywords[i]
                        linkParameter = linkParameter.replace(/\s+/g, '+')
                        // console.log(linkParameter)

                        // eslint-disable-next-line prettier/prettier
                        keyword_list += 
                        `<a href='/search?q=${linkParameter}' rel='next'>
                            <div id=${unique_id}>
                                <li id="helper-list-item">
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
                                </li>
                            </div>
                        </a>`

                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        searchResults!.innerHTML = keyword_list

                        const listContainer = document.getElementById(
                            `${unique_id}`
                        )
                        console.log(listContainer)
                        let routerLink = ''
                        routerLink += `
                        <Link
                            to={{
                                pathname: '/search',
                                search: '?q=' + tom,
                            }}
                        >`
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        listContainer!.innerHTML = routerLink
                    }
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    })
    return (
        <>
            {/* <Link
                to={{
                    pathname: '/search',
                    search: '?q=' + 'tom',
                }}
            > */}
                <div id="search-results"></div>
            {/* </Link> */}
        </>
    )
}
