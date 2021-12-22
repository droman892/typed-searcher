import React from 'react'
import { useSelector } from 'react-redux'

const StoreDisplay = () => {
    const searchQuery = useSelector((state) => state.searchQuery)

    console.log('*****NEWSLETTER STATE*****')
    console.log('Query Input: ' + searchQuery)

    return <div></div>
}

export default StoreDisplay
