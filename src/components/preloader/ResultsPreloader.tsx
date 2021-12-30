import './ResultsPreloader.scss'
import '../../styles/_index.scss'
import { Row, Col, Preloader } from 'react-materialize'

export const ResultsPreloader = () => {
    return (
        // <div className="preloader-container">
        //     <Row className="preloader">
        //         <Col s={4}>
        //             <Preloader active color="green" flashing={false} size="big" />
        //         </Col>
        //     </Row>
        // </div>

        <div className="preloader-container-1">
            <div className="preloader-container-2">
                <Row className="preloader">
                    <Col s={4}>
                        <Preloader active flashing={true} size="big" />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
