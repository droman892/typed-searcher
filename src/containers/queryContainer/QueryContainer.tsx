import './QueryContainer.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { Searcher } from '../../components/searcher/Searcher'
import { ButtonContainer } from '../buttonContainer/ButtonContainer'

export const QueryContainer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="query-box">
            <form className="form-container" onSubmit={handleSubmit}>
                <Searcher />
                <ButtonContainer />
            </form>
        </div>
    )
}
