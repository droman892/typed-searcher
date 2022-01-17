import './QueryContainer.scss'
import '../../styles/_index.scss'
import 'materialize-css'
import { Searcher } from '../../components/searcher/Searcher'
import { ButtonContainer } from '../buttonContainer/ButtonContainer'

export const QueryContainer = () => {
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }

    return (
        <div className="query-box">
            <div className="form-container" onSubmit={handleSubmit}>
                <div className="form-container-2">
                    <Searcher />
                    <ButtonContainer />
                </div>
            </div>
        </div>
    )
}
