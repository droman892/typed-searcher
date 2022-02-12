import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HelperItem } from './HelperItem'
import { State } from '../../state/index'

export const HelperListItems = () => {
    const queryValue = useSelector((state: State) => state.searchQuery)
    const [responseData, setResponseData] = useState('')

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://keywords4.p.rapidapi.com/google-topLevel-10-keywords',
            params: { search: queryValue, country: 'us' },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'keywords4.p.rapidapi.com',
                'x-rapidapi-key':
                    '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
            },
        }

        axios
            .request(options)
            .then(function (response) {
                if (response.data.googleGuggestedKeywords !== undefined) {
                    const keywordArray = response.data.googleGuggestedKeywords
                    setResponseData(keywordArray)
                }
            })
            .catch(function (error) {
                console.error(error)
            })
    }, [queryValue])

    return (
        <>
            {responseData[0] ? <HelperItem name={responseData[0]} /> : ''}
            {responseData[1] ? <HelperItem name={responseData[1]} /> : ''}
            {responseData[2] ? <HelperItem name={responseData[2]} /> : ''}
            {responseData[3] ? <HelperItem name={responseData[3]} /> : ''}
            {responseData[4] ? <HelperItem name={responseData[4]} /> : ''}
            {responseData[5] ? <HelperItem name={responseData[5]} /> : ''}
            {responseData[6] ? <HelperItem name={responseData[6]} /> : ''}
            {responseData[7] ? <HelperItem name={responseData[7]} /> : ''}
            {responseData[8] ? <HelperItem name={responseData[8]} /> : ''}
            {responseData[9] ? <HelperItem name={responseData[9]} /> : ''}
        </>
    )
}
