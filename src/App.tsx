import { Searcher } from './components/searcher/Searcher'
import { LayoutNavigation } from './components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from './components/layout/layoutFooter/LayoutFooter'

export const App = () => {
    return (
        <>
            <LayoutNavigation />
            <h1>Google</h1>
            <Searcher />
            <LayoutFooter />
        </>
    )
}
