// import { LayoutNavigation } from '../components/layout/layoutNavigation/LayoutNavigation'
// import { LayoutFooter } from '../components/layout/layoutFooter/LayoutFooter'
import { useEffect } from 'react'
import { QueryHeader } from '../components/queryHeader/QueryHeader'
import { QueryContainer } from '../containers/queryContainer/QueryContainer'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { DefaultHomeLayout } from '../components/layout/DefaultHomeLayout'
import '../styles/styles.scss'

export const Home = () => {
    const dispatch = useDispatch()
    const { createQuery } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        document.title = 'Google'

        createQuery('')
    }, [createQuery])

    return (
        // <>
        //     <LayoutNavigation />
        //     <QueryHeader />
        //     <QueryContainer />
        //     <div className="emptyDivStyle"></div>
        //     <LayoutFooter />
        // </>

        <DefaultHomeLayout>
            <QueryHeader />
            <QueryContainer />
            <div className="emptyDivStyle"></div>
        </DefaultHomeLayout>
    )
}
