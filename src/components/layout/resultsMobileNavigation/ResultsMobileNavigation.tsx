import './ResultsMobileNavigation.scss'
import magnifyingGlass from '../../../assets/images/magnifyingGlass.png'
import theX from '../../../assets/images/theX.png'
import { TextInput } from 'react-materialize'
import { useSelector } from 'react-redux'
import { State } from '../../../state'
import { createQuery } from '../../../state/actionCreators'

export const ResultsMobileNavigation = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length || 0

    const InputMobileChange = (e: { target: { value: string } }) => {
        createQuery(e.target.value)
        console.log('Mobile - input change')
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
                                <TextInput
                                    inputClassName="mobile-results-input-3"
                                    id="query"
                                    value={queryValue}
                                    onChange={InputMobileChange}
                                    onClick={ClickMobileResultTrends}
                                    maxLength="2048"
                                    autoComplete="off"
                                />
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
