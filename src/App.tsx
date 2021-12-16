import { LayoutNavigation } from './components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from './components/layout/layoutFooter/LayoutFooter'
import { QueryContainer } from './containers/queryContainer/QueryContainer'

export const App = () => {
    return (
        <>
            <LayoutNavigation />
            <QueryContainer />
            <LayoutFooter />
        </>
    )
}
