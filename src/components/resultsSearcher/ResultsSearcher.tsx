import './ResultsSearcher.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { TextInput } from 'react-materialize'
import GoogleLogo from '../../assets/images/GoogleLogo.svg'
import magnifyingGlass from '../../assets/images/magnifyingGlass.png'
import theX from '../../assets/images/theX.png'
import microphone from '../../assets/images/microphone.png'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../state/index'
import { Link } from 'react-router-dom'
import { DisplayTrends } from '../../functions/DisplayTrends'
import { ResultsSearchHelper } from '../resultsSearchHelper/ResultsSearchHelper'
// import { ResultsFormSubmission } from '../../functions/ResultsFormSubmission'
import { DoNothing } from '../../functions/DoNothing'
import { useEffect, useState } from 'react'

export const ResultsSearcher = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length || 0
    // console.log(queryValueLength)
    let queryPath = queryValue
    queryPath = queryPath.replace(/\s+/g, '+')
    // console.log('QUERY PATH: ' + queryPath)
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)
    const [refreshValue, setRefreshValue] = useState('')
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const queryMade = urlParams.get('q') || ''

    useEffect(() => {
        document.title = `${queryMade} - Google`
        console.log('UseEffect [constant] wrote this')
    })

    useEffect(() => {
        let inputValue = document.getElementById('query').value
        inputValue = queryMade
        createQuery(inputValue)
        console.log('UseEffect [onLoad] wrote tis')
    }, [])

    const DeleteQuery = () => {
        createQuery('')
        // document.getElementById("query").value = ''
        document.getElementById('query')?.focus()
        console.log('DeleteQuery wrote this')
    }

    const SetURLPath = () => {
        document.title = `${queryValue} - Google`
        const inputValue = document.getElementById('query')
        inputValue?.blur()
        console.log('SetURLPath wrote this')
    }

    // DisplayTrends()



    const LoadedState = () => {
        if (queryValueLength === 0) {
            setRefreshValue(queryMade)
            document.title = `${refreshValue} - Google`
            console.log('LoadedState wrote this')
        }
    }

    const altValue = () => {
        if (queryValueLength == 0) {
            return createQuery('')
        } else {
            return refreshValue
        }
    }

    const ResultsFormSubmission = () => {
        console.log('ResultsFormSubmission wrote this')
        document.title = `${queryValue} - Google`
    }

    return (
        <>
            <form
                className="results-form-container-1"
                // onSubmit={ResultsFormSubmission}
                // onLoad={LoadedState}
                // onKeyDown={ResultsFormSubmission}
            >
                <div id="container">
                    <div className="results-form-container-2">
                        <div className="results-logo-container">
                            <Link to="/" className="results-logo-0">
                                <img
                                    src={GoogleLogo}
                                    alt="Results Page Logo"
                                    className="results-logo"
                                />
                            </Link>
                        </div>
                        <div
                            className="results-query-container-1"
                            id="results-query-container-1"
                        >
                            <div className="results-query-container-2">
                                <div className="results-query-container-3">
                                    <div className="results-query-input">
                                        <div className="results-query-input-1">
                                            <TextInput
                                                id="query"
                                                inputClassName="results-input"
                                                value={queryValue || ''}
                                                onChange={(e) =>
                                                    createQuery(e.target.value)
                                                }
                                                maxLength="2048"
                                                autoComplete="off"
                                                // onSubmit={SetURLPath}
                                            />
                                        </div>
                                    </div>
                                    <>
                                        {queryValueLength === 0 ? (
                                            <div className="results-x-microphone">
                                                <div className="results-x">
                                                    <span className="results-x-2">
                                                        <img
                                                            src={theX}
                                                            alt="X"
                                                            className="x"
                                                        />
                                                    </span>
                                                    <div className="results-line" />
                                                </div>
                                                <div className="results-microphone">
                                                    <img
                                                        src={microphone}
                                                        alt="Microphone"
                                                        className="results-microphone-image"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="results-x-microphone">
                                                <div
                                                    className="results-x"
                                                    onClick={DeleteQuery}
                                                >
                                                    <span className="results-x-2">
                                                        <img
                                                            src={theX}
                                                            alt="X"
                                                            className="x"
                                                        />
                                                    </span>
                                                    <div className="results-line" />
                                                </div>
                                                <div className="results-microphone">
                                                    <img
                                                        src={microphone}
                                                        alt="Microphone"
                                                        className="results-microphone-image"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </>
                                </div>
                                <>
                                    {queryValueLength === 0 ? (
                                        <button
                                            className="results-query-button-container-1 results-glass-button"
                                            onClick={DoNothing}
                                        >
                                            <div className="results-query-button-container-2">
                                                <span className="results-query-button-container-3">
                                                    <img
                                                        src={magnifyingGlass}
                                                        alt="Magnifying Glass"
                                                        className="results-glass-image"
                                                    />
                                                </span>
                                            </div>
                                        </button>
                                    ) : (
                                        <Link
                                            to={{
                                                pathname: '/search',
                                                search: '?q=' + queryPath,
                                            }}
                                            className="results-glass-link"
                                            onClick={SetURLPath}
                                        >
                                            <button className="results-query-button-container-1 results-glass-button">
                                                <div className="results-query-button-container-2">
                                                    <span className="results-query-button-container-3">
                                                        <img
                                                            src={
                                                                magnifyingGlass
                                                            }
                                                            alt="Magnifying Glass"
                                                            className="results-glass-image"
                                                        />
                                                    </span>
                                                </div>
                                            </button>
                                        </Link>
                                    )}
                                </>
                            </div>
                        </div>
                        <div
                            className="results-helper-container-1"
                            id="results-helper-container-1"
                        >
                            <ResultsSearchHelper />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
