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
    } else {
        document
            .getElementById('search-engine')
            ?.classList.remove('search-engine-2')
        document
            .getElementById('helper-container')
            ?.classList.remove('helper-container-2')
    }
}
