import './Searcher.scss'
import '../../../src/styles/_index.scss'
import 'materialize-css'
import { TextInput } from 'react-materialize'

export const Searcher = () => {
    return (
        <div className="search-engine">
            <TextInput id="query" inputClassName="search-input" />
        </div>
    )
}
