import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../state'
import { createQuery } from '../../state/actionCreators'
import './MobileHelperData.scss'

export const MobileHelperData = (props) => {
    // const queryValue = useSelector((state: State) => state.searchQuery)
    // let queryPath = queryValue
    // queryPath = queryPath.replace(/\s+/g, '+')

    // console.log(props.helperValue)

    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    let helperLink = props.helperValue
    helperLink = helperLink.replace(/\s+/g, '+')

    const SetState = () => {
        createQuery(props.helperValue)
        document
            .getElementById('mobile-results-form-2')
            ?.classList.remove('mobile-results-form-2-a')
        document
            .getElementById('mobile-results-form-3')
            ?.classList.remove('none')
        document
            .getElementById('mobile-results-helpers')
            ?.classList.remove('mobile-results-helpers-2')
        document
            .getElementById('mobile-results-helpers-data-hidden')
            ?.classList.remove('mobile-results-helpers-data')
    }

    return (
        <Link
            to={{
                pathname: '/search',
                search: '?q=' + helperLink,
            }}
            className="mrh-link"
            onClick={SetState}
        >
            <li className="mobile-results-helpers-data-5">
                <div className="mobile-results-helpers-data-glass"></div>
                <div className="mobile-results-helpers-data-input">
                    <div className="mobile-results-helpers-data-input-2">
                        <span className="mobile-results-helpers-data-input-3">
                            {props.helperValue}
                        </span>
                    </div>
                </div>
                <div className="mobile-results-helpers-data-switch">
                    <div className="mobile-results-helpers-data-switch-2"></div>
                </div>
            </li>
        </Link>
    )
}
