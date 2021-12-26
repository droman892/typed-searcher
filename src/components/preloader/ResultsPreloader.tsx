import './ResultsPreloader.scss'
import '../../styles/_index.scss'
import { Row, Col, Preloader } from 'react-materialize'

export const ResultsPreloader = () => {
    return (
        <Row>
            <Col s={4}>
                <Preloader active color="green" flashing={false} size="big" />
            </Col>
        </Row>
    )
}
