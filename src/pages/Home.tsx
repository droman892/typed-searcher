import { LayoutNavigation } from '../components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from '../components/layout/layoutFooter/LayoutFooter'
import { HomeContainer } from '../containers/homeContainer/HomeContainer'

export const Home = () => {
    return (
        <div className="page-flexbox-wrapper">
            <LayoutNavigation />
            <main>
                <HomeContainer />
                <div id="target"></div>
            </main>
            <LayoutFooter />
        </div>
    )
}
