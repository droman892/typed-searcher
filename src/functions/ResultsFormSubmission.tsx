import { useSelector } from 'react-redux'
import { State } from '../state'

export const ResultsFormSubmission = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)

    document.title = `${queryValue} - Google`
}
