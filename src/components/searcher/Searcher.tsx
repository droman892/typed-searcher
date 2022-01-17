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

    const setInputChange = (e: { target: { value: string } }) => {
        createQuery(e.target.value)
    }

    return (
        <>
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
                            // maxLength="2048"
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
        </>
    )
}
