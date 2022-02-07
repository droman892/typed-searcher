import './ResultsMobileNavigation.scss'
import magnifyingGlass from '../../../assets/images/magnifyingGlass.png'
import theX from '../../../assets/images/theX.png'
import { TextInput } from 'react-materialize'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../../../state'
import { createQuery } from '../../../state/actionCreators'
import { bindActionCreators } from 'redux'
import { Link, useNavigate } from 'react-router-dom'
import { DoNothing } from '../../../functions/DoNothing'
import { MobileResultsHelpers } from '../../mobileResultsHelpers/MobileResultsHelpers'
import { MobileHelperData } from '../../mobileHelperData/MobileHelperData'
import { useEffect, useState } from 'react'
import { ResultsHelperListItems } from '../../keywords/ResultsHelperListItems'
import axios from 'axios'

export const ResultsMobileNavigation = () => {
    const queryValue = useSelector((state: State) => state.searchQuery) || ''
    const queryValueLength: number = queryValue.length || 0
    let queryPath = queryValue
    queryPath = queryPath.replace(/\s+/g, '+')
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const queryMade = urlParams.get('q') || ''
    // console.log('MOBILE - ' + queryMade)
    const navigate = useNavigate()
    const [responseMRData, setMRResponseData] = useState('')

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
                // console.log(response.data.googleGuggestedKeywords)
                if (response.data.googleGuggestedKeywords !== undefined) {
                    const keywordArray = response.data.googleGuggestedKeywords
                    setMRResponseData(keywordArray)
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    }, [queryValue])

    const InputMobileChange = (e: { target: { value: string } }) => {
        createQuery(e.target.value)
        // console.log('Mobile - input change')
    }

    const ClickMobileResultTrends = () => {
        if (queryValueLength > 0) {
            console.log(queryValueLength)
            console.log(
                'MOBILE-ResultTrends - the results searcher has been clicked!'
            )
            document
                .getElementById('mobile-results-form-3')
                ?.classList.add('mobile-results-form-3-1')
            // document
            //     .getElementById('results-helper-container-1')
            //     ?.classList.add('results-helper-container-2')
        } else {
            console.log('input has NO value!')
            // document
            //     .getElementById('results-query-container-1')
            //     ?.classList.remove('results-query-container-9')
            // document
            //     .getElementById('results-helper-container-1')
            //     ?.classList.remove('results-helper-container-2')
        }
    }

    const DeleteMobileResultsQuery = () => {
        createQuery('')
        document.getElementById('query')?.focus()
        console.log('DeleteMobileResultsQuery wrote this')
    }

    const MobileResultsPressEnter = () => {
        if (queryValueLength > 0) {
            console.log('Mobile Results form submitted!')
            navigate('/search?q=' + queryValue)
        }
    }

    const SetMobileResultsURLPath = () => {
        const inputValue = document.getElementById('query')
        document.title = `${queryValue} - Google`
        inputValue?.blur()
        console.log('SetMobileResultsURLPath wrote this')
    }

    // const DisplayMobileResultTrends = () => {
    //     const unfocusedInput = document.getElementById('query')

    //     // && unfocusedInput === document.activeElement

    //     if (queryValueLength > 0) {
    //         console.log('SOMETHING')
    //         document
    //             .getElementById('mobile-results-form-3')
    //             ?.classList.add('mobile-results-form-3-1')
    //     } else {
    //         console.log('NOTHING')
    //         document
    //             .getElementById('mobile-results-form-3')
    //             ?.classList.remove('mobile-results-form-3-1')
    //     }
    // }
    // DisplayMobileResultTrends()

    const MobileResultsHelpersView = () => {
        // const target = document.getElementById('mobile-query')
        // console.log('eureka!!!')

        // if (queryValueLength > 0 && queryValue == queryMade) {
            document
                .getElementById('mobile-results-form-2')
                ?.classList.add('mobile-results-form-2-a')
            document
                .getElementById('mobile-results-form-3')
                ?.classList.add('none')
            document
                .getElementById('mobile-results-helpers')
                ?.classList.add('mobile-results-helpers-2')
            document
                .getElementById('mobile-results-helpers-data-hidden')
                ?.classList.add('mobile-results-helpers-data')
        // }
    }

    const xHelperView = () => {
        MobileResultsHelpersView()
        createQuery('')
        const resultsInput = document.getElementById('mhr')
        resultsInput?.focus()
    }

    const whatever = (e) => {
        e.preventDefault()
        console.log('DAVID ROMAN!!!!!')
    }

    useEffect(() => {
        const resultsInput = document.getElementById('mobile-query')
        resultsInput?.blur()
        createQuery(queryMade)
    }, [queryMade])

    return (
        <form
            className="mobile-results-form"
            // onSubmit={MobileResultsPressEnter}
            onSubmit={whatever}
        >
            <div>
                <div
                    className="mobile-results-form-2"
                    id="mobile-results-form-2"
                >
                    <div
                        className="mobile-results-form-3"
                        id="mobile-results-form-3"
                    >
                        <>
                            {queryValueLength === 0 ? (
                                <button
                                    className="mobile-results-glass"
                                    onClick={DoNothing}
                                >
                                    <div className="mobile-results-glass-2">
                                        <span className="mobile-results-glass-3">
                                            <img
                                                src={magnifyingGlass}
                                                alt="Magnifying Glass"
                                                className="mobile-results-glass-4"
                                            ></img>
                                        </span>
                                    </div>
                                </button>
                            ) : (
                                <Link
                                    to={{
                                        pathname: '/search',
                                        search: '?q=' + queryPath,
                                    }}
                                    // onClick={SetMobileResultsURLPath}
                                    className="mobile-results-glass"
                                    onClick={MobileResultsHelpersView}
                                >
                                    <button className="mobile-results-glass">
                                        <div className="mobile-results-glass-2">
                                            <span className="mobile-results-glass-3">
                                                <img
                                                    src={magnifyingGlass}
                                                    alt="Magnifying Glass"
                                                    className="mobile-results-glass-4"
                                                ></img>
                                            </span>
                                        </div>
                                    </button>
                                </Link>
                            )}
                        </>

                        <div className="mobile-results-input">
                            <div className="mobile-results-input-2">
                                <TextInput
                                    inputClassName="mobile-results-input-3"
                                    id="mobile-query"
                                    value={queryValue || ''}
                                    onChange={InputMobileChange}
                                    onClick={MobileResultsHelpersView}
                                    maxLength="2048"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="mobile-results-x">
                            <>
                                {queryValueLength === 0 ? (
                                    <div className="mobile-results-x-2">
                                        <span className="mobile-results-x-3">
                                            <img
                                                src={theX}
                                                alt="The X"
                                                className="mobile-results-x-4"
                                            />
                                        </span>
                                    </div>
                                ) : (
                                    <div
                                        className="mobile-results-x-2"
                                        // onClick={DeleteMobileResultsQuery}
                                        onClick={xHelperView}
                                        aria-hidden
                                    >
                                        <span className="mobile-results-x-3">
                                            <img
                                                src={theX}
                                                alt="The X"
                                                className="mobile-results-x-4"
                                            />
                                        </span>
                                    </div>
                                )}
                            </>
                        </div>
                    </div>

                    <div className="mrh-container">
                        <div
                            id="mobile-results-helpers"
                            className="mobile-results-helpers"
                        >
                            <MobileResultsHelpers />
                        </div>
                        <div
                            className="mobile-results-helpers-data-hidden"
                            id="mobile-results-helpers-data-hidden"
                        >
                            <ul className="mobile-results-helpers-data-2">
                                <div className="mobile-results-helpers-data-3">
                                    <ul className="mobile-results-helpers-data-4">
                                        {responseMRData[0] && queryValueLength > 0 ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[0] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[1] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[1] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[2] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[2] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[3] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[3] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[4] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[4] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[5] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[5] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[6] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[6] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[7] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[7] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[8] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[8] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}

                                        {responseMRData[9] && queryValueLength > 0  ? (
                                            <MobileHelperData
                                                helperValue={
                                                    responseMRData[9] || ''
                                                }
                                            />
                                        ) : (
                                            ''
                                        )}
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
