import { useSelector } from 'react-redux'
import { State } from './index'

export const StoreDisplay = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const queryValueLength: number = queryValue.length
    console.log('STORE DISPLAY - QUERY VALUE: ' + queryValue)
    console.log('STORE DISPLAY - QUERY LENGTH: ' + queryValueLength)

    return <></>
}
