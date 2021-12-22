import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { NotFound } from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    )
}
