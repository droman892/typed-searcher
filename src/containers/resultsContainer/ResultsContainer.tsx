import './ResultsContainer.scss'
import '../../styles/_index.scss'
// import { Query } from '../../api/Query'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const ResultsContainer = () => {
    let searchQuery: string = useSelector((state) => state.searchQuery)
    searchQuery = searchQuery.replace(/\s+/g, '+')

    const options: object = {
        method: 'GET',
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchQuery}&num=100`,
        headers: {
            'x-user-agent': 'desktop',
            'x-proxy-location': 'US',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key':
                '9cdabbc96amsh83dd832ad95c9e2p1f9988jsn41ca0b264b55',
        },
    }

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data.results[0])
        })
        .catch(function (error) {
            console.error(error)
        })

    return <div></div>
}
