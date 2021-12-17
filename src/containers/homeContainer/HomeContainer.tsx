import './HomeContainer.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { QueryHeader } from '../../components/queryHeader/QueryHeader'
import { QueryContainer } from '../queryContainer/QueryContainer'

export const HomeContainer = () => {
    return (
        <div className="box">
            <QueryHeader />
            <QueryContainer />
        </div>
    )
}
