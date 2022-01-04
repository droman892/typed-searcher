import { LayoutNavigation } from '../components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from '../components/layout/layoutFooter/LayoutFooter'
// import { HomeContainer } from '../containers/homeContainer/HomeContainer'
import { useEffect } from 'react'
import { QueryHeader } from '../components/queryHeader/QueryHeader'
import { QueryContainer } from '../containers/queryContainer/QueryContainer'

export const Home = () => {
    useEffect(() => {
        document.title = 'Google'
    }, [])

    return (
        // <div className="page-flexbox-wrapper">
        <>
            <LayoutNavigation />
            {/* <main> */}
            <QueryHeader />
            <QueryContainer />
            <div className="emptyDivStyle"></div>
            {/* <HomeContainer /> */}
            {/* </main> */}
            <LayoutFooter />
        </>
        // </div>
    )
}
