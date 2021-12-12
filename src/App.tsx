import './styles.css'
import MediaImg from './media.png'
import SunSVG from './sun.svg'
import { Counter } from './Counter'

export const App = () => {
    const person = 'Tech Wiz'
    return (
        <div>
            <h1>
                WOW, the app is working, {person}!!!! - {process.env.NODE_ENV}{' '}
                {process.env.name}
            </h1>
            <Counter />
            <img src={MediaImg} alt="Media Icons PNG"></img>
            <img src={SunSVG} alt="Sun SVG"></img>
        </div>
    )
}
