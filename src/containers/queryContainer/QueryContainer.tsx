import './QueryContainer.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { Searcher } from '../../components/searcher/Searcher'
import { ButtonContainer } from '../buttonContainer/ButtonContainer'

export const QueryContainer = () => {
    return (
        <div className="query-box">
            <form className="form-container">
                <Searcher />
                <ButtonContainer />
            </form>
        </div>
    )
}
