import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../state'
import { useDispatch, useSelector } from 'react-redux'
import '../searcher/Searcher.scss'
import { useEffect } from 'react'

export const HelperItem = (props: { name: string }) => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)
    const queryValue = useSelector((state: State) => state.searchQuery)
    // const queryValueLength: number = queryValue.length || 0

    // const queryString = window.location.search
    // console.log('QUERY STRING: ' + queryString)
    // const urlParams = new URLSearchParams(queryString)
    // const queryMade = urlParams.get('q')
    // console.log('ACTUAL QUERY MADE: ' + queryMade)

    let keyword = props.name

    if (keyword !== undefined) {
        keyword = keyword.replace(/\s+/g, '+')
    }

    const setState = () => {
        createQuery(props.name)
        document.title = `${props.name} - Google`
    }

    // useEffect(() => {
    //     const queryString = window.location.search
    //     console.log('QUERY STRING: ' + queryString)
    //     const urlParams = new URLSearchParams(queryString)
    //     const queryMade = urlParams.get('q')
    //     console.log('ACTUAL QUERY MADE: ' + queryMade)
    //     // createQuery(queryMade)
    // })

    return (
        <Link
            to={{
                pathname: '/search',
                search: '?q=' + keyword,
            }}
            onClick={setState}
        >
            <li id="helper-list-item">
                <div id="item-container">
                    <div id="item-icon"></div>
                    <div id="item-name">
                        <div id="item-name-2">
                            <span id="item-span">{props.name}</span>
                        </div>
                    </div>
                </div>
            </li>
        </Link>
    )
}
