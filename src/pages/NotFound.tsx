import { useEffect } from 'react'
import { QueryHeader } from '../components/queryHeader/QueryHeader'
import { QueryContainer } from '../containers/queryContainer/QueryContainer'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { DefaultHomeLayout } from '../components/layout/DefaultHomeLayout'
import '../styles/styles.scss'
import { DefaultResultsLayout } from '../components/layout/DefaultResultsLayout'
import { NotFoundMessage } from '../components/notFoundMessage/NotFoundMessage'

export const NotFound = () => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        document.title = 'Google'
        createQuery('')
    }, [createQuery])

    return (
        <DefaultResultsLayout>
            <main className="results-page-container-1">
                <div className="results-page-container-2">
                    <div className="results-page-container-3">
                        <NotFoundMessage />
                    </div>
                </div>
            </main>
        </DefaultResultsLayout>
    )
}
