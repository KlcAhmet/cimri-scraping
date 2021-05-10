import { Row, Col, Image } from 'react-bootstrap';
import { page404gif } from '../map/ComponentMap'

const Page404 = props => {

    return (
        <Row style={{ margin: 0 }} >
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} xs={12} sm={12} md={12} lg={12}>
                <h6 style={{ textAlign: 'center', fontSize: 60, color: 'red', margin: 50 }}>404 sayfa bulunamadı</h6>
                <Image src={page404gif} fluid />
            </Col>
        </Row>
    )
}

export default Page404