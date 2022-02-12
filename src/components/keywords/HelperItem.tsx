import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { useDispatch } from 'react-redux'
import '../searcher/Searcher.scss'

export const HelperItem = (props: { name: string }) => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    let keyword = props.name

    if (keyword !== undefined) {
        keyword = keyword.replace(/\s+/g, '+')
    }

    const SetStateTitle = () => {
        createQuery(props.name)
        document.title = `${props.name} - Google`
        document
            .getElementById('results-query-container-1')
            ?.classList.remove('results-query-container-9')
        document
            .getElementById('results-helper-container-1')
            ?.classList.remove('results-helper-container-2')
    }

    return (
        <Link
            to={{
                pathname: '/search',
                search: '?q=' + keyword,
            }}
            onClick={SetStateTitle}
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
