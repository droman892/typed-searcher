import './ResultsMobileNavigation.scss'
import magnifyingGlass from '../../../assets/images/magnifyingGlass.png'
import theX from '../../../assets/images/theX.png'
import { TextInput } from 'react-materialize'

export const ResultsMobileNavigation = () => {
    return (
        <form className="mobile-results-form">
            <div>
                <div className="mobile-results-form-2">
                    <div className="mobile-results-form-3">
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
                        <div className="mobile-results-input">
                            <div className="mobile-results-input-2">
                                <TextInput inputClassName="mobile-results-input-3" />
                            </div>
                        </div>
                        <div className="mobile-results-x">
                            <button className="mobile-results-x-2">
                                <span className="mobile-results-x-3">
                                    <img
                                        src={theX}
                                        alt="The X"
                                        className="mobile-results-x-4"
                                    ></img>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
