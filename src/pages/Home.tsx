import { LayoutNavigation } from '../components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from '../components/layout/layoutFooter/LayoutFooter'
import { HomeContainer } from '../containers/homeContainer/HomeContainer'
import { useEffect } from 'react'

export const Home = () => {
    useEffect(() => {
        document.title = 'Google'
    }, [])

    return (
        <div className="page-flexbox-wrapper">
            <LayoutNavigation />
            <main>
                <HomeContainer />
            </main>
            <LayoutFooter />
        </div>
    )
}
