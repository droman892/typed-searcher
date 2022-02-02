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
import { useEffect } from 'react'

export const ResultsMobileNavigation = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
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
        if (queryValueLength > 0 && queryValue == queryMade) {
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
        }
    }

    const whatever = (e) => {
        e.preventDefault()
        console.log('DAVID ROMAN!!!!!')
    }

    useEffect(() => {
        createQuery(queryMade)
    }, [createQuery, queryMade])

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
                                        onClick={DeleteMobileResultsQuery}
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
                                        <MobileHelperData helperValue="David Roman" />
                                        <MobileHelperData helperValue="Maria" />
                                        <MobileHelperData helperValue="Tom" />
                                        <MobileHelperData helperValue="Jess" />
                                        <MobileHelperData helperValue="Stuart" />
                                        <MobileHelperData helperValue="Jeff" />
                                        <MobileHelperData helperValue="Mike" />
                                        <MobileHelperData helperValue="Sam Robbins" />
                                        <MobileHelperData helperValue="Kevin" />
                                        <MobileHelperData helperValue="Steve" />
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
