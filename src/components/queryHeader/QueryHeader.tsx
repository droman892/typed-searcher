import './QueryHeader.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import GoogleLogo from '../../assets/images/GoogleLogo.svg'

export const QueryHeader = () => {
    return (
        <div className="container-positioned query-header-1">
            <div className="query-header-2">
                <img
                    src={GoogleLogo}
                    className="logo google"
                    alt="Google Logo"
                />
            </div>
        </div>
    )
}
