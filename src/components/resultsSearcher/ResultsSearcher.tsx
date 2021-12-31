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
import { actionCreators } from '../../store/index'
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react'

export const ResultsSearcher = () => {
    const searchQuery = useSelector((state) => state.searchQuery)
    const dispatch = useDispatch()
    const { searchQueryAction } = bindActionCreators(actionCreators, dispatch)

    // useEffect(() => {
    //     const inputValue = searchQuery

    //     fix why redux state is lost on refresh...use redux persist

    // }, [])

    const resultsFormSubmission = () => {
        document.title = `${searchQuery} - Google`
    }

    return (
        <form
            className="results-form-container-1"
            onSubmit={resultsFormSubmission}
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
                    <div className="results-query-container-1">
                        <div className="results-query-container-2">
                            <div className="results-query-container-3">
                                <div className="results-query-input">
                                    <div className="results-query-input-1">
                                        <TextInput
                                            id="query"
                                            inputClassName="results-input"
                                            value={searchQuery}
                                            onChange={(e) =>
                                                searchQueryAction(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
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
                            </div>
                            <button className="results-query-button-container-1">
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
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
