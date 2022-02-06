import { ResultsNavigation } from './resultsNavigation/ResultsNavigation'
import { ResultsFooter } from './resultsFooter/ResultsFooter'
import '../../styles/_index.scss'

interface MyProps {
    children?: React.ReactNode
}

export const DefaultResultsLayout = ({ children }: MyProps) => {
    return (
        <div className="results-page-box">
            <div className="results-page-box-2">
                <ResultsNavigation />
                {children}
                <ResultsFooter />
            </div>
        </div>
    )
}
