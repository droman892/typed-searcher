import './Searcher.scss'
import '../../../src/styles/_index.scss'
import 'materialize-css'
import { TextInput } from 'react-materialize'
import magnifyingGlass from '../../assets/images/magnifyingGlass.png'
import microphone from '../../assets/images/microphone.png'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store/index'

export const Searcher = () => {
    const searchQuery = useSelector((state) => state.searchQuery)
    const dispatch = useDispatch()
    const { searchQueryAction } = bindActionCreators(actionCreators, dispatch)
    console.log('Search Input: ' + searchQuery)

    return (
        <div className="search-engine">
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
                        value=""
                        onChange={(e) => searchQueryAction(e.target.value)}
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
    )
}
