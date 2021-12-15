import { Counter } from './components/counter/Counter'
import MediaImg from './assets/images/media.png'
import SunSVG from './assets//images/sun.svg'

export const App = () => {
    const person = 'Tech Wizzzzzz'
    return (
        <div>
            <h1>
                WOW, the app is working, {person}!!!! - {process.env.NODE_ENV}{' '}
                {process.env.name}
            </h1>
            <p>Welcome to the template!!!!!</p>
            <Counter />
            <img src={MediaImg} alt="Media Icons PNG"></img>
            <img src={SunSVG} alt="Sun SVG"></img>
        </div>
    )
}
