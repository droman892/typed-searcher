import { useSelector } from 'react-redux'

export const StoreDisplay = () => {
    const searchQuery = useSelector((state) => state.searchQuery)
    console.log('Search Input: ' + searchQuery)

    return <></>
}
