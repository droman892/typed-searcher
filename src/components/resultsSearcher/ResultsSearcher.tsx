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

export const ResultsSearcher = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length || 0
    console.log(queryValueLength)
    let queryPath = queryValue
    queryPath = queryPath.replace(/\s+/g, '+')
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)
    const resultsFormSubmission = () => {
        document.title = `${queryValue} - Google`
    }

    // const changeURL = () => {
    //     window.history.pushState('object or string', 'Title', '/search/*')
    // }

    const deleteQuery = () => {
        createQuery('')
        document.getElementById('query')?.focus()
    }

    const doNothing = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }

    return (
        <form
            className="results-form-container-1"
            onSubmit={resultsFormSubmission}
            // onKeyDown={resultsFormSubmission}
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
                                            value={queryValue}
                                            onChange={(e) =>
                                                createQuery(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="results-x-microphone">
                                    <div
                                        className="results-x"
                                        onClick={deleteQuery}
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
                            </div>
                            {/* <Link
                                to={{
                                    pathname: '/search',
                                    search: '?q=' + queryPath,
                                }}
                                className="results-glass-link"
                            >
                                <button className="results-query-button-container-1 results-glass-button">
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
                            </Link> */}
                            <>
                                {queryValueLength === 0 ? (
                                    <button className="results-query-button-container-1 results-glass-button" onClick={doNothing}>
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
                                    >
                                        <button className="results-query-button-container-1 results-glass-button">
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
                                    </Link>
                                )}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
