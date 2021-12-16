import { LayoutNavigation } from './components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from './components/layout/layoutFooter/LayoutFooter'
import { QueryContainer } from './containers/queryContainer/QueryContainer'

export const App = () => {
    return (
        <div className="page-flexbox-wrapper">
            <LayoutNavigation />
            <main>
                <QueryContainer />
            </main>
            <LayoutFooter />
        </div>
    )
}
