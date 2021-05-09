import { Row, Col, Image } from 'react-bootstrap';
import { page404gif } from '../map/ComponentMap'

const Page404 = props => {

    return (
        <Row  >
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} xs={11} sm={11} md={11} lg={11}>
                <h6 style={{ textAlign: 'center', fontSize: 60, color: 'red', margin: 50 }}>404 sayfa bulunamadı</h6>
                <Image src={page404gif} fluid />
            </Col>
        </Row>
    )
}

export default Page404