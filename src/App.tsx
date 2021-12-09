import './styles.css';
import MediaImg from './media.png';
import SunSVG from './sun.svg';

export const App = () => {
    return (
        <div>
            <h1>
                It's working!!!!
            </h1>
            <img src={MediaImg} alt='Media Icons PNG'></img>
            <img src={SunSVG} alt='Sun SVG'></img>
        </div>
    );
}