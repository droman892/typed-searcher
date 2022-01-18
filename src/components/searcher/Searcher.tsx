import './Searcher.scss'
import '../../../src/styles/_index.scss'
import 'materialize-css'
import { TextInput } from 'react-materialize'
import magnifyingGlass from '../../assets/images/magnifyingGlass.png'
import microphone from '../../assets/images/microphone.png'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../state/index'
import { SearchHelper } from '../searchHelper/SearchHelper'
import '../searchHelper/SearchHelper.scss'
import { DisplayTrends } from '../../functions/DisplayTrends'

export const Searcher = () => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)
    const queryValue: string = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length
    console.log('QUERY LENGTH: ' + queryValueLength)

    DisplayTrends()

    const ChangeHelperContainer = () => {
        document.addEventListener('click', (e) => {
            const buttonContainer = document.getElementById('search-engine')
            const searchHelper = document.getElementById('search-helper')
            let targetElement = e.target
            do {
                if (
                    targetElement == buttonContainer ||
                    targetElement == searchHelper
                ) {
                    return
                }
                targetElement = targetElement.parentNode
            } while (targetElement)
            document
                .getElementById('search-engine')
                ?.classList.remove('search-engine-2')
            document
                .getElementById('helper-container')
                ?.classList.remove('helper-container-2')
            document
                .getElementById('results-query-container-1')
                ?.classList.remove('results-query-container-9')
            document
                .getElementById('results-helper-container-1')
                ?.classList.remove('results-helper-container-2')
        })
    }

    ChangeHelperContainer()

    const clickTrends = () => {
        if (queryValueLength > 0) {
            document
                .getElementById('search-engine')
                ?.classList.add('search-engine-2')
            document
                .getElementById('helper-container')
                ?.classList.add('helper-container-2')
            document
                .getElementById('results-query-container-1')
                ?.classList.add('results-query-container-9')
            document
                .getElementById('results-helper-container-1')
                ?.classList.add('results-helper-container-2')
        } else {
            document
                .getElementById('search-engine')
                ?.classList.remove('search-engine-2')
            document
                .getElementById('helper-container')
                ?.classList.remove('helper-container-2')
            document
                .getElementById('results-query-container-1')
                ?.classList.remove('results-query-container-9')
            document
                .getElementById('results-helper-container-1')
                ?.classList.remove('results-helper-container-2')
        }
    }

    const setInputChange = (e: { target: { value: string } }) => {
        createQuery(e.target.value)
    }

    return (
        <div id="searcher-container">
            <form className="search-engine" id="search-engine">
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
                            onChange={setInputChange}
                            onClick={clickTrends}
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
            </form>
            <div className="helper-container" id="helper-container">
                <SearchHelper />
            </div>
        </div>
    )
}
