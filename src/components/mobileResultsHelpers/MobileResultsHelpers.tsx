import { Button, TextInput } from 'react-materialize'
import './MobileResultsHelpers.scss'
import arrow from '../../assets/images/arrow.png'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../../state'
import { createQuery } from '../../state/actionCreators'
import theX from '../../assets/images/theX.png'
import { bindActionCreators } from 'redux'

export const MobileResultsHelpers = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    const queryString = window.location.search
    // console.log('QUERY STRING: ' + queryString)
    const urlParams = new URLSearchParams(queryString)
    const queryMade = urlParams.get('q') || ''
    // console.log('YUPPPP: ' + queryMade)

    const InputResultsMobileChange = (e: { target: { value: string } }) => {
        createQuery(e.target.value)
        // console.log('Mobile - input change')
    }

    const RemoveDisplay = (e) => {
        e.preventDefault()
        console.log('lit')
        document
            .getElementById('mobile-results-form-2')
            ?.classList.remove('mobile-results-form-2-a')
        document
            .getElementById('mobile-results-form-3')
            ?.classList.remove('none')
        document
            .getElementById('mobile-results-helpers')
            ?.classList.remove('mobile-results-helpers-2')
    }

    return (
        <>
            <Button className="mrh-arrow" onClick={RemoveDisplay}>
                <div className="mrh-arrow-2">
                    <span className="mrh-arrow-3">
                        <img
                            src={arrow}
                            alt="Back Arrow"
                            className="back-arrow"
                        />
                    </span>
                </div>
            </Button>
            <div className="mrh-input">
                <div className="mrh-input-2">
                    <TextInput
                        inputClassName="mrh-text"
                        value={queryValue || ''}
                        onChange={InputResultsMobileChange}
                        maxLength="2048"
                        autoComplete="off"
                    />
                </div>
            </div>
            <div className="mrh-x">
                <button className="mrh-x-2">
                    <span className="mrh-x-3">
                        <img src={theX} alt="The X" className="mrh-x-4" />
                    </span>
                </button>
            </div>
        </>
    )
}