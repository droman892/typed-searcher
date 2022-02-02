import './MobileHelperData.scss'

export const MobileHelperData = (props) => {
    return (
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
    )
}
