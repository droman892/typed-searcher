import './HomeContainer.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { QueryContainer } from '../queryContainer/QueryContainer'

export const HomeContainer = () => {
    return (
        <div className="home-container">
            <QueryContainer />
        </div>
    )
}
