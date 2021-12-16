import './QueryContainer.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { QueryHeader } from '../../components/queryHeader/QueryHeader'
import { Searcher } from '../../components/searcher/Searcher'
import { ButtonContainer } from '../../components/buttons/ButtonContainer'

export const QueryContainer = () => {
    return (
        <div className="box">
            <QueryHeader />
            <Searcher />
            <ButtonContainer />
        </div>
    )
}
