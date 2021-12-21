import { LayoutNavigation } from '../components/layout/layoutNavigation/LayoutNavigation'
import { LayoutFooter } from '../components/layout/layoutFooter/LayoutFooter'

export const NotFound = () => {
    return (
        <div className="page-flexbox-wrapper">
            <LayoutNavigation />
            <main>
                <h1>This is the NotFound page.</h1>
            </main>
            <LayoutFooter />
        </div>
    )
}
