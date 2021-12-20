import './Searcher.scss'
import '../../../src/styles/_index.scss'
import 'materialize-css'
import { TextInput } from 'react-materialize'
import magnifyingGlass from '../../assets/images/magnifyingGlass.png'
import microphone from '../../assets/images/microphone.png'

export const Searcher = () => {
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
                    <TextInput id="query" inputClassName="search-input" />
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
