import { useEffect } from 'react'
import { QueryHeader } from '../components/queryHeader/QueryHeader'
import { QueryContainer } from '../containers/queryContainer/QueryContainer'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { DefaultHomeLayout } from '../components/layout/DefaultHomeLayout'
import '../styles/styles.scss'

export const Home = () => {

    console.log(process.env.NODE_ENV)

    // console.log(process.env.NODE_ENV)

     console.log(process.env.REACT_APP_KEYWORDS)
     console.log(process.env.REACT_APP_NOT_SECRET_CODE)

    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        document.title = 'Google'
        createQuery('')
    }, [createQuery])

    return (
        <DefaultHomeLayout>
            <QueryHeader />
            <QueryContainer />
            <div className="emptyDivStyle"></div>
        </DefaultHomeLayout>
    )
}
