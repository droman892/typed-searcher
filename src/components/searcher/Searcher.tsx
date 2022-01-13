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
import { HelperListItems } from '../../api/HelperListItems'

export const Searcher = () => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)
    // const queryValue = useSelector((state: State) => state.searchQuery)
    // const queryValueLength: number = queryValue.length
    // const searchResults = document.getElementById('search-results')

    DisplayTrends()

    HelperListItems()

    console.log(HelperListItems)

    // window.onclick = function (event) {
    //     if (!event.target.matches('.search-helper')) {
    //         document
    //             .getElementById('search-engine')
    //             ?.classList.remove('search-engine-2')
    //         document
    //             .getElementById('helper-container')
    //             ?.classList.remove('helper-container-2')
    //     } else {
    //         document
    //             .getElementById('search-engine-2')
    //             ?.classList.add('search-engine-2')
    //         document
    //             .getElementById('helper-container-2')
    //             ?.classList.add('helper-container-2')
    //     }
    // }

    window.onclick = function (event) {
        console.log('DAVID ROMAN IS GREAT')
        // const element = event.currentTarget as HTMLInputElement
        // console.log(element)
        // const value = element.value
        // console.log(value)
        const target = document.getElementById('search-engine')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        if (event == target) {
            document
                .getElementById('search-engine-2')
                ?.classList.add('search-engine-2')
            document
                .getElementById('helper-container-2')
                ?.classList.add('helper-container-2')
        } else {
            document
                .getElementById('search-engine')
                ?.classList.remove('search-engine-2')
            document
                .getElementById('helper-container')
                ?.classList.remove('helper-container-2')
        }
    }

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
