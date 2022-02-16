import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './state/index'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/typed-searcher">
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
