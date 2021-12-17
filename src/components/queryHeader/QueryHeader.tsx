import './QueryHeader.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import GoogleLogo from '../../assets/images/GoogleLogo.svg'

export const QueryHeader = () => {
    return (
        <div>
            <img src={GoogleLogo} className="logo" alt="Google Logo" />
        </div>
    )
}
