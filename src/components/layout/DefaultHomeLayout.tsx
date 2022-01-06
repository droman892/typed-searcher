import { LayoutNavigation } from './layoutNavigation/LayoutNavigation'
import { LayoutFooter } from './layoutFooter/LayoutFooter'

interface MyProps {
    children?: React.ReactNode
}

export const DefaultHomeLayout = ({ children }: MyProps) => {
    return (
        <>
            <LayoutNavigation />
            {children}
            <LayoutFooter />
        </>
    )
}
