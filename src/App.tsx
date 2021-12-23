import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { NotFound } from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import { StoreDisplay } from './store/StoreDisplay'

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<Results />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <StoreDisplay />
        </>
    )
}
