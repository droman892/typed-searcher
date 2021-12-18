import './FetchButton.scss'
import '../../../styles/_index.scss'
import 'materialize-css'
import { Button } from 'react-materialize'
import axios from 'axios'

export const FetchButton = () => {
    const getQueryData = () => {
        const options: object = {
            method: 'GET',
            url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=david+roman&num=100',
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
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    return (
        <Button
            className="button-style"
            node="button"
            waves="light"
            onClick={getQueryData}
        >
            <span>Google Search</span>
        </Button>
    )
}
