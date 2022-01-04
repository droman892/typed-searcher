import { useSelector } from 'react-redux'
import { State } from './index'

export const StoreDisplay = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    console.log('Search Input: ' + queryValue)

    return <></>
}
