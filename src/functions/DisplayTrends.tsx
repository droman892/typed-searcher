import { useSelector } from 'react-redux'
import { State } from '../state'

export const DisplayTrends = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length
    if (queryValueLength > 0) {
        document
            .getElementById('search-engine')
            ?.classList.add('search-engine-2')
        document
            .getElementById('helper-container')
            ?.classList.add('helper-container-2')
        document
            .getElementById('results-query-container-1')
            ?.classList.add('results-query-container-9')
    }
}
